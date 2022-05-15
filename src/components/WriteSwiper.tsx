import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import closeImg from 'assets/images/writeSwiper/close.svg';
import pictureImg from 'assets/images/writeSwiper/picture.svg';
import BaseLine from 'common/BaseLine';
import { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { createFlexBox, themeColorPrimary } from 'assets/styles/theme';
import Empty from 'common/Empty';
import { useAppDispatch, useWriteImagesSelector } from 'modules/store';
import { addImages } from 'modules/slices/writeSlice';

const IMG_MARGIN = 16;
const SlIDES_PERVIEW = 3;

const WriteSwiper = () => {
  const images = useWriteImagesSelector();
  const imgFilesRef = useRef<HTMLInputElement>(null);
  const IMG_FILES_LENGTH = images?.length ?? 0;
  const dispatch = useAppDispatch();

  const handleFileRemove = useCallback(
    (selectedIdx: number) => () => {
      if (images) {
        dispatch(addImages(images.filter((_, idx) => idx !== selectedIdx)));
      }
    },
    [images, dispatch],
  );

  const handleFilesOnChange = useCallback(
    ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
      if (files === null || files.length === 0) return;

      const old_files = images;
      const new_files = Array.from(files);

      const createImgURLs = (files: File[]): Image[] =>
        files.map(file => ({
          fileName: file.name,
          url: URL.createObjectURL(file),
        }));

      const isFileDuplicatedCheck = (files: Image[], source: string) => {
        const isDuplicated = files.find(({ fileName }) => fileName === source);
        return isDuplicated;
      };

      /** 이미 올라간 이미지는 제거하고 새로 들어온 이미지만 필터링해서 반환합니다. */
      const removeDuplicatesImgFiles = old_files
        ? new_files.filter(({ name }) => !isFileDuplicatedCheck(old_files, name))
        : new_files;

      const imgURLs = createImgURLs(removeDuplicatesImgFiles);

      dispatch(addImages(old_files ? old_files.concat(imgURLs) : imgURLs));
    },
    [dispatch, images],
  );

  const swiper = useMemo(
    () =>
      images ? (
        <WriteSwiperContainer>
          <Swiper spaceBetween={IMG_MARGIN} slidesPerView={SlIDES_PERVIEW}>
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
          </Swiper>
        </WriteSwiperContainer>
      ) : (
        <Empty text="게시된 이미지가 없습니다.🔎" top="377px" left="calc(25%)" />
      ),
    [images, handleFileRemove],
  );

  return (
    <>
      {swiper}
      <FileButtonWrapper htmlFor="files">
        <input id="files" multiple accept=".jpg, .png" type="file" onChange={handleFilesOnChange} ref={imgFilesRef} />
        <img src={pictureImg} alt="pictureImg" />
        <FileButtonText>사진({IMG_FILES_LENGTH}/6)</FileButtonText>
      </FileButtonWrapper>
      {/* <button
        style={{
          position: 'absolute',
          zIndex: 100,
        }}
        onClick={() => {
          const convertURLtoFile = async (url: string) => {
            const response = await fetch(url);
            const data = await response.blob();
            console.log('data=>', data, url);
            const ext = url.split('.').pop(); // url 구조에 맞게 수정할 것
            const filename = url.split('/').pop(); // url 구조에 맞게 수정할 것
            const metadata = { type: data.type };
            return new File([data], filename!, metadata);
          };
          convertURLtoFile(test).then(file => console.log(file));

          // const file = await fetch(test)
          //   .then(r => r.blob())
          //   .then(blobFile => new File([blobFile], 'fileNameGoesHere', { type: 'image/png' }));
          // const blob = await fetch(test).then(r => r.blob());
          // console.log(file);
          // setImgFiles([file]);
        }}
      >
        클릭
      </button> */}
      <BaseLine top="524px" />
    </>
  );
};

const SwiperImgWrapper = styled.div`
  position: absolute;
  height: 100%;
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
  position: absolute;
  top: 377px;
  left: 20px;
  width: calc(100% - 20px);
  overflow: hidden;
  cursor: pointer;
  & .swiper-slide {
    width: 89px !important;
    height: 83px;
    border-radius: 4px;
  }
`;

const FileButtonWrapper = styled.label`
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

export default WriteSwiper;
