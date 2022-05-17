import Text from 'common/Text';
import styled from 'styled-components';
import { FC } from 'react';

const Content: FC<Pick<Post, 'title' | 'content' | 'imageUrl'>> = ({ title, content, imageUrl }) => {
  const extractedText = content.replace(/(<([^>]+)>)/gi, '').replace(/&lt;\/?.&gt;/gi, '');

  return (
    <div>
      <Text text={title} fontSize="16px" lineHeight="21px" margin="0 0 6px 0" isTextOverflow />
      <Text
        text={extractedText}
        fontSize="14px"
        lineHeight="22px"
        isTextOverflow
        overflowLine={2}
        color="#7A7A7A"
        fontWeight="400"
      />
      {imageUrl && (
        <ContentImgWrapper>
          <img src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl} alt="dummyImg" />
        </ContentImgWrapper>
      )}
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

export default Content;
