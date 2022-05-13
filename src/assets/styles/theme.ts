import { ThemeUtilFunc } from 'src/types/styled';
import { css } from 'styled-components';

const color = {
  primary: '#2C7FFF',
  black: '#222222',
  white: '#FFFFFF',
  gray: '#E8E8E8',
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
const themeColorGray: ThemeUtilFunc = ({ theme: { color } }) => color.gray;
const themeFontSizePrimary: ThemeUtilFunc = ({ theme: { fontSize } }) => fontSize.primary;

const createFlexBox = (justifyContent: string, alignItems: string, flexDirection?: string) => css`
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
  themeColorGray,
};
export type Theme = typeof theme;
