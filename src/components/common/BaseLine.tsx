import { FC } from 'react';
import { themeColorGray } from 'src/assets/styles/theme';
import styled, { css } from 'styled-components';

const BaseLine: FC<BaseLineProps> = ({ ...rest }) => <BaseLineWrapper {...rest} />;

const BaseLineWrapper = styled.div<BaseLineProps>`
  position: absolute;
  width: 360px;
  height: 1px;
  left: 0px;
  background: ${themeColorGray};
  ${({ top }) =>
    css`
      top: ${top};
    `}
`;

export default BaseLine;
