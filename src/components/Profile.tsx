import styled from 'styled-components';
import { createFlexBox } from 'assets/styles/theme';
import Text from 'common/Text';
import { FC, useCallback } from 'react';

const Profile: FC<Pick<Post, 'writerNickName' | 'writtenAt' | 'writerProfileUrl' | 'categoryName'>> = ({
  writerNickName,
  writerProfileUrl,
  writtenAt,
  categoryName,
}) => {
  const timeForToday = useCallback((value: string) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return value.split('T').shift();
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }, []);

  const createProfileBgColor = useCallback(() => {
    const index = Math.floor(Math.random() * 3);
    const COLORS = ['#FFC7CC', '#B2E9E3', '#ffd784'];
    return COLORS[index];
  }, []);

  return (
    <ProfileContainer>
      <ProfileImgWrapper backgroundColor={createProfileBgColor()}>
        <img src={writerProfileUrl} alt="writerProfileImg" />
      </ProfileImgWrapper>
      <Text text={writerNickName} fontWeight="700" top="3px" left="13%" lineHeight="12px" fontSize="12px" />
      <Text
        text={`${categoryName}・${timeForToday(writtenAt)}`}
        top="18px"
        left="13%"
        fontWeight="300"
        lineHeight="12px"
        fontSize="12px"
        color="#B4B4B4"
      />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  position: relative;
  margin-bottom: 19px;
`;
const ProfileImgWrapper = styled.div<{ backgroundColor: string }>`
  ${createFlexBox('center', 'center')};
  width: 32px;
  height: 32px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  & > img {
    width: 20px;
    height: 20px;
  }
`;

export default Profile;
