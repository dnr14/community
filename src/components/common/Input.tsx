import { FC } from 'react';
import { themeColorGray2 } from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Input: FC<InputProps> = ({ placeholder, type, maxLength, value, onChange, ...rest }) => {
  const { width, top, left, height, lineHeight, fontSize, fontWeight } = rest;

  const style = {
    width,
    top,
    left,
    height,
    lineHeight,
    fontSize,
    fontWeight,
  };

  return (
    <StyledInput
      {...style}
      type={type}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input<InputProps>`
  position: absolute;
  border: none;
  padding: 0;
  font-weight: 500;
  ${({ top, left, height, width, fontSize, fontWeight }) => css`
    top: ${top};
    left: ${left};
    width: ${width ?? '324px'};
    height: ${height ?? '24px'};
    line-height: ${height ?? '24px'};
    font-size: ${fontSize ?? '14px'};
    font-weight: ${fontWeight ?? '500'};
  `}
  &::placeholder {
    color: ${themeColorGray2};
  }
`;

export default Input;
