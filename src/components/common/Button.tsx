import { FC, memo } from 'react';
import {
  createFlexBox,
  themeColorGray2,
  themeColorPrimary,
  themeColorWhite,
  themeFontSizePrimary,
} from 'assets/styles/theme';
import styled, { css } from 'styled-components';

const Button: FC<ButtonProps> = ({ disabled, onClick, children, ...rest }) => {
  const { width, height, left, right, bottom, top, fontWeight } = rest;

  const style = {
    width,
    height,
    left,
    right,
    bottom,
    top,
    fontWeight,
  };

  return (
    <ButtonWrapper {...style} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<Omit<ButtonProps, 'text'>>`
  position: absolute;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px 8px;
  border: none;
  font-size: ${themeFontSizePrimary};
  background-color: ${themeColorPrimary};
  color: ${themeColorWhite};
  ${createFlexBox('center', 'center')};
  gap: 6px;
  ${({ width, height, left, right, bottom, top, fontWeight, lineHeight }) => css`
    width: ${width};
    height: ${height};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    top: ${top};
    font-weight: ${fontWeight ?? '700'};
    line-height: ${lineHeight ?? 24};
  `}
  &:disabled {
    background: ${themeColorGray2};
  }
`;

export default memo(Button);
