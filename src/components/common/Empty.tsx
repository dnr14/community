import { FC } from 'react';
import { createFlexBox, themeFontSizePrimary } from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Empty: FC<EmptyProps> = ({ text, ...rest }) => <EmptyWrapper {...rest}>{text}</EmptyWrapper>;

const EmptyWrapper = styled.div<Omit<EmptyProps, 'text'>>`
  ${createFlexBox('center', 'center')};
  font-size: ${themeFontSizePrimary};
  font-weight: 500;

  ${({ height, top, left }) => {
    return css`
      ${top || left ? `position: absolute` : 'position: static'};
      left: ${left};
      top: ${top};
      height: ${height ?? '50px'};
    `;
  }};
`;

export default Empty;
