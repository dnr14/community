import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import dummyImg from 'assets/images/writeSwiper/dummy.png';
import closeImg from 'assets/images/writeSwiper/close.svg';
import pictureImg from 'assets/images/writeSwiper/picture.svg';
import BaseLine from 'common/BaseLine';
import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { createFlexBox, themeColorPrimary } from 'assets/styles/theme';
import Empty from 'common/Empty';

const WriteSwiper = () => {
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const imgFilesRef = useRef<HTMLInputElement>(null);
  const IMG_FILES_LENGTH = imgFiles.length;
  const IMG_MARGIN = 16;
  const SlIDES_PERVIEW = 3;

  const handleFilesOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) setImgFiles(Array.from(files));
  };

  /* 기능이 완성되면 더미이미지가 아닌 실제 이미지로 교체 */
  const swiper = useMemo(
    () => (
      <Swiper spaceBetween={IMG_MARGIN} slidesPerView={SlIDES_PERVIEW}>
        {Array.from({ length: IMG_FILES_LENGTH }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <SwiperImgWrapper>
              <img src={dummyImg} alt="dummyImg" />
              <CloseImgWrapper>
                <img src={closeImg} alt="closeImg" />
              </CloseImgWrapper>
            </SwiperImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    ),
    [IMG_FILES_LENGTH],
  );

  return (
    <>
      {IMG_FILES_LENGTH ? (
        <WriteSwiperContainer>{swiper}</WriteSwiperContainer>
      ) : (
        <Empty text="게시된 이미지가 없습니다.🔎" top="377px" left="calc(25%)" />
      )}
      <FileButtonWrapper htmlFor="files">
        <input id="files" multiple accept=".jpg, .png" type="file" onChange={handleFilesOnChange} ref={imgFilesRef} />
        <img src={pictureImg} alt="pictureImg" />
        <FileButtonText>사진({IMG_FILES_LENGTH}/6)</FileButtonText>
      </FileButtonWrapper>
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
