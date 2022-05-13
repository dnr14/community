import { FC } from 'react';
import { createFlexBox, themeColorPrimary, themeColorWhite, themeFontSizePrimary } from 'src/assets/styles/theme';
import styled, { css } from 'styled-components';

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonWrapper>{text}</ButtonWrapper>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<Omit<ButtonProps, 'text'>>`
  position: absolute;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 700;
  padding: 12px 8px;
  font-size: ${themeFontSizePrimary};
  background-color: ${themeColorPrimary};
  color: ${themeColorWhite};
  ${createFlexBox('center', 'center')};
  gap: 6px;
  ${({ width, height, left, right, bottom, top }) => css`
    width: ${width};
    height: ${height};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    top: ${top};
  `}
`;

const ButtonWrapper = styled.span`
  line-height: 24px;
`;

export default Button;
