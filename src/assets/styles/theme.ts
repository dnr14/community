import { ThemeUtilFunc } from 'src/types/styled';
import { css } from 'styled-components';
import { Property } from 'csstype';

const color = {
  primary: '#2C7FFF',
  black: '#222222',
  white: '#FFFFFF',
  gray1: '#E8E8E8',
  gray2: '#B4B4B4',
};

const fontSize = {
  primary: '14px',
};

const theme = {
  color,
  fontSize,
};
const themeColorBlack: ThemeUtilFunc = ({ theme: { color } }) => color.black;
const themeColorPrimary: ThemeUtilFunc = ({ theme: { color } }) => color.primary;
const themeColorWhite: ThemeUtilFunc = ({ theme: { color } }) => color.white;
const themeColorGray1: ThemeUtilFunc = ({ theme: { color } }) => color.gray1;
const themeColorGray2: ThemeUtilFunc = ({ theme: { color } }) => color.gray2;
const themeFontSizePrimary: ThemeUtilFunc = ({ theme: { fontSize } }) => fontSize.primary;

const createFlexBox = (
  justifyContent: Property.JustifyContent,
  alignItems: Property.AlignItems,
  flexDirection?: Property.FlexDirection,
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection ?? 'row'};
`;

export {
  theme,
  createFlexBox,
  themeColorBlack,
  themeColorWhite,
  themeFontSizePrimary,
  themeColorPrimary,
  themeColorGray1,
  themeColorGray2,
};
export type Theme = typeof theme;
