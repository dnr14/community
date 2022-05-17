import { FC, memo } from 'react';
import { themeColorBlack, themeFontSizePrimary } from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Text: FC<TextProps> = ({ text, ...rest }) => <TextWrapper {...rest}>{text}</TextWrapper>;

const TextWrapper = styled.p<Omit<TextProps, 'text'>>`
  color: ${themeColorBlack};
  position: absolute;

  ${({ lineHeight, height, top, left, right, fontSize, fontWeight }) => css`
    line-height: ${lineHeight};
    height: ${height};
    left: ${left};
    right: ${right};
    top: ${top};
    font-size: ${fontSize ?? themeFontSizePrimary};
    font-weight: ${fontWeight ?? 700};
  `}
`;

export default memo(Text);
