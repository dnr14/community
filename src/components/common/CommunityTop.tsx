import { FC } from 'react';
import styled from 'styled-components';

const CommunityTop: FC<CommunityTopProps> = ({ children }) => <CommunityTopContainer>{children}</CommunityTopContainer>;

const CommunityTopContainer = styled.div`
  height: 56px;
  width: 360px;
  position: absolute;
`;

export default CommunityTop;
