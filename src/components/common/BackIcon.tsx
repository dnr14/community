import { createFlexBox } from 'src/assets/styles/theme';
import styled from 'styled-components';
import backIcon from 'assets/images/back.svg';
import { FC } from 'react';

const BackIcon: FC<BackIconProps> = ({ handleGoBack }) => (
  <BackIconWrapper onClick={handleGoBack}>
    <img src={backIcon} alt="backIcon" />
  </BackIconWrapper>
);

const BackIconWrapper = styled.div`
  position: absolute;
  ${createFlexBox('center', 'center')};
  cursor: pointer;
  width: 24px;
  height: 24px;
  left: 16px;
  top: 16px;
  & > img {
    padding: 5px;
  }
`;

export default BackIcon;
