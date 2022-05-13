import { FC } from 'react';
import { themeColorGray1 } from 'src/assets/styles/theme';
import styled, { css } from 'styled-components';

const BaseLine: FC<BaseLineProps> = ({ ...rest }) => <BaseLineWrapper {...rest} />;

const BaseLineWrapper = styled.div<BaseLineProps>`
  position: absolute;
  background: ${themeColorGray1};
  ${({ top, width, left, height }) =>
    css`
      height: ${height ?? '1px'};
      top: ${top};
      left: ${left ?? '0px'};
      width: ${width ?? '360px'};
    `}
`;

export default BaseLine;
