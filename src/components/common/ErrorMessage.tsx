import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { createFlexBox, themeColorRed, themeColorWhite, themeFontSizePrimary } from 'assets/styles/theme';

const ErrorMessage: FC<ErrorMessageProps> = ({ text, isError, ...rest }) => {
  if (!isError) return null;
  return <ErrorMessageWrapper {...rest}>{text}</ErrorMessageWrapper>;
};

const ErrorMessageWrapper = styled.p<Omit<ErrorMessageProps, 'text' | 'isError'>>`
  position: absolute;
  background-color: ${themeColorRed};
  color: ${themeColorWhite};
  ${createFlexBox('flex-start', 'center')};
  z-index: 2;
  padding: 5px 10px;
  border-radius: 4px;
  box-sizing: border-box;

  ${({ top, left, width, height, fontSize }) => css`
    top: ${top};
    left: ${left};
    width: ${width};
    height: ${height};
    font-size: ${fontSize ?? themeFontSizePrimary};
  `}
`;

export default memo(ErrorMessage);
