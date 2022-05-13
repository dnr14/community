import { FC } from 'react';
import {
  createFlexBox,
  themeColorGray2,
  themeColorPrimary,
  themeColorWhite,
  themeFontSizePrimary,
} from 'src/assets/styles/theme';
import styled, { css } from 'styled-components';

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
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
    <ButtonContainer {...style}>
      <ButtonWrapper>{text}</ButtonWrapper>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Omit<ButtonProps, 'text'>>`
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
  ${({ width, height, left, right, bottom, top, fontWeight }) => css`
    width: ${width};
    height: ${height};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    top: ${top};
    font-weight: ${fontWeight ?? '700'};
  `}
  &:disabled {
    background: ${themeColorGray2};
  }
`;

const ButtonWrapper = styled.span`
  line-height: 24px;
`;

export default Button;
