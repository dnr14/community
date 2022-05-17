import { FC, memo } from 'react';
import { themeColorBlack, themeFontSizePrimary } from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Text: FC<TextProps> = ({ text, ...rest }) => <TextWrapper {...rest}>{text}</TextWrapper>;

const TextWrapper = styled.p<Omit<TextProps, 'text'>>`
  ${({ lineHeight, height, top, left, right, fontSize, fontWeight, margin, color }) => css`
    position: ${top || left ? 'absolute' : 'static'};
    line-height: ${lineHeight};
    height: ${height};
    left: ${left};
    right: ${right};
    top: ${top};
    font-size: ${fontSize ?? themeFontSizePrimary};
    font-weight: ${fontWeight ?? 700};
    margin: ${margin ?? '0px'};
    color: ${color ?? themeColorBlack};
  `}

  ${({ isTextOverflow, overflowLine = 1 }) =>
    isTextOverflow &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${overflowLine};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export default memo(Text);
