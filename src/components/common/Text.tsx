import { FC, memo } from 'react';
import { themeColorBlack, themeFontSizePrimary } from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Text: FC<TextProps> = ({ text, ...rest }) => <TextWrapper {...rest}>{text}</TextWrapper>;

const TextWrapper = styled.p<Omit<TextProps, 'text'>>`
  color: ${themeColorBlack};
  font-size: ${themeFontSizePrimary};
  font-weight: 700;
  position: absolute;

  ${({ lineHeight, height, top, left, right }) => css`
    line-height: ${lineHeight};
    height: ${height};
    left: ${left};
    right: ${right};
    top: ${top};
  `}
`;

export default memo(Text);
