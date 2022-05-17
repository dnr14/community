import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import closeImg from 'assets/images/writeSwiper/close.svg';
import pictureImg from 'assets/images/writeSwiper/picture.svg';
import BaseLine from 'common/BaseLine';
import { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { createFlexBox, themeColorPrimary } from 'assets/styles/theme';
import Empty from 'common/Empty';
import { useAppDispatch, useWriteImagesSelector } from 'modules/store';
import { addImages } from 'modules/slices/writeSlice';
import CommonSwiper from 'common/CommonSwiper';

const IMG_MARGIN = 16;
const SlIDES_PERVIEW = 3;

const WriteImages = () => {
  const images = useWriteImagesSelector();
  const imgFilesRef = useRef<HTMLInputElement>(null);
  const IMG_FILES_LENGTH = images?.length ?? 0;
  const dispatch = useAppDispatch();

  const handleFileRemove = useCallback(
    (selectedIdx: number) => () => {
      if (images) {
        const { url } = images[selectedIdx];
        URL.revokeObjectURL(url);
        dispatch(addImages(images.filter((_, idx) => idx !== selectedIdx)));
      }
    },
    [images, dispatch],
  );

  const handleFilesOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (files === null || files.length === 0) return;

      const old_files = images;
      const new_files = Array.from(files);
      const OLD_FILES_LENG = old_files?.length ?? 0;
      const NEW_FILES_LENG = new_files.length;
      const CURRENT_FILES_LENG = OLD_FILES_LENG + NEW_FILES_LENG;
      const MAX_UPLOAD_FILES = 6;
      const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

      try {
        /* 파일 유효성 검사 */
        /* 1. 사이즈는 1MB가 넘으면 안됩니다. */
        /* 2. 확장자는 jpeg,png,jpg만 허용됩니다. */
        /* 3. 한번에 올릴수 있는 파일 개수는 6개 까지입니다. */
        /* 4. 최대 업로드할 수 있는 파일은 6개입니다. */
        const isFileValidation = ({ type, size }: File) => {
          if (CURRENT_FILES_LENG > MAX_UPLOAD_FILES)
            throw new Error(`최대 ${MAX_UPLOAD_FILES}개까지 업로드할 수 있습니다.`);
          if (NEW_FILES_LENG > MAX_UPLOAD_FILES)
            throw new Error(`한번에 최대 ${MAX_UPLOAD_FILES}개까지 업로드할 수 있습니다.`);
          if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg') {
            throw new Error('JPEG, PNG, JPG 파일만 업로드 가능합니다.');
          }
          if (size >= MAX_FILE_SIZE) {
            throw new Error('1MB 이하의 파일만 업로드 가능합니다.');
          }
        };

        const createImgURLs = (files: File[]): Image[] =>
          files.map(file => ({
            fileName: file.name,
            url: URL.createObjectURL(file),
          }));

        const isFileDuplicatedCheck = (files: Image[], source: string) => {
          const isDuplicated = files.find(({ fileName }) => fileName === source);
          return isDuplicated;
        };

        new_files.forEach(isFileValidation);

        /** 이미 올라간 이미지는 제거하고 새로 들어온 이미지만 필터링해서 반환합니다. */
        const removeDuplicatesImgFiles = old_files
          ? new_files.filter(({ name }) => !isFileDuplicatedCheck(old_files, name))
          : new_files;

        const imgURLs = createImgURLs(removeDuplicatesImgFiles);
        dispatch(addImages(old_files ? old_files.concat(imgURLs) : imgURLs));
      } catch (error) {
        event.target.files = null;
        if (error instanceof Error) {
          const { message } = error;
          alert(message);
        }
      }
    },
    [dispatch, images],
  );

  const swiper = useMemo(
    () =>
      images ? (
        <WriteSwiperContainer>
          <CommonSwiper spaceBetween={IMG_MARGIN} slidesPerView={SlIDES_PERVIEW} top="377px" left="20px">
            {images.map(({ url, fileName }, idx) => (
              <SwiperSlide key={idx}>
                <SwiperImgWrapper>
                  <img src={url} alt={fileName} />
                  <CloseImgWrapper onClick={handleFileRemove(idx)}>
                    <img src={closeImg} alt="closeImg" />
                  </CloseImgWrapper>
                </SwiperImgWrapper>
              </SwiperSlide>
            ))}
          </CommonSwiper>
        </WriteSwiperContainer>
      ) : (
        <Empty text="게시된 이미지가 없습니다.🔎" top="377px" left="calc(25%)" />
      ),
    [images, handleFileRemove],
  );

  return (
    <>
      {swiper}
      <ImagesButtonWrapper htmlFor="files">
        <input id="files" multiple accept=".jpg, .png" type="file" onChange={handleFilesOnChange} ref={imgFilesRef} />
        <img src={pictureImg} alt="pictureImg" />
        <FileButtonText>사진({IMG_FILES_LENGTH}/6)</FileButtonText>
      </ImagesButtonWrapper>
      <BaseLine top="524px" />
    </>
  );
};

const SwiperImgWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
const CloseImgWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 4px;
  right: 4px;
  background: #0000007f;
  border-radius: 4px;
  ${createFlexBox('center', 'center')};
`;

const WriteSwiperContainer = styled.div`
  & .swiper-slide {
    width: 89px !important;
    height: 83px;
    border-radius: 4px;
  }
`;

const ImagesButtonWrapper = styled.label`
  position: absolute;
  width: 77px;
  height: 20px;
  left: 20px;
  top: 482px;
  padding: 6px 3px 6px 6px;
  background: #dbe9ff;
  border-radius: 6px;
  cursor: pointer;
  ${createFlexBox('center', 'center')};
  input {
    display: none;
  }
`;

const FileButtonText = styled.span`
  height: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: ${themeColorPrimary};
`;

export default WriteImages;
