import Text from 'common/Text';
import styled from 'styled-components';
import { FC, useCallback } from 'react';

const Content: FC<ContentProps> = ({ title, content, imageUrl, isTextOverflow, isDetail }) => {
  const extractedText = content.replace(/(<([^>]+)>)/gi, '').replace(/&lt;\/?.&gt;/gi, '');

  const convertURLtoImg = useCallback(() => {
    if (imageUrl === null) return null;
    const arrayImg = typeof imageUrl === 'string' ? Array.from([imageUrl]) : imageUrl;

    if (isDetail) {
      return (
        <ContentImgsWrapper>
          {arrayImg.map((url, idx) => (
            <img key={idx} src={url} alt="img" />
          ))}
        </ContentImgsWrapper>
      );
    }

    return (
      <ContentImgWrapper>
        <img src={arrayImg[0]} alt="img" />
      </ContentImgWrapper>
    );
  }, [imageUrl, isDetail]);

  return (
    <div>
      <Text text={title} fontSize="16px" lineHeight="21px" margin="0 0 6px 0" isTextOverflow={isTextOverflow} />
      <Text
        text={extractedText}
        fontSize="14px"
        lineHeight="22px"
        isTextOverflow={isTextOverflow}
        overflowLine={2}
        color="#7A7A7A"
        fontWeight="400"
      />
      {convertURLtoImg()}
    </div>
  );
};

const ContentImgWrapper = styled.div`
  max-height: 160px;
  height: 160px;
  margin-top: 17px;
  & > img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`;

const ContentImgsWrapper = styled.div`
  margin-top: 17px;
  margin-left: -25px;
  cursor: pointer;

  & > img {
    margin-top: 5px;
    width: 360px;
    height: 288px;
  }
`;

export default Content;
