interface AbsoluteCssProps {
  top: string;
  left: string;
  bottom: string;
  right: string;
  width: string;
  height: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

/* BaseLineProps  */
declare interface BaseLineProps extends Partial<AbsoluteCssProps> {}

/* BackIcon */
declare interface BackIconProps extends Partial<AbsoluteCssProps> {
  handleGoBack: () => void;
}

/* Text */
declare interface TextProps extends Partial<AbsoluteCssProps> {
  text: string;
  isTextOverflow?: boolean;
  overflowLine?: number;
  margin?: string;
  color?: string;
}

/* Button */
declare interface ButtonProps extends Partial<AbsoluteCssProps> {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

/* CommunityTop */
declare interface CommunityTopProps {
  children: React.ReactNode;
}

/* SelectBox */
declare interface SelectBoxProps extends Partial<AbsoluteCssProps> {
  defaultValue?: string | number;
  children: React.ReactNode;
  getSelectedId?: (id: string) => void;
  getSelectedText?: (text: string) => void;
}

/* Input */
declare interface InputProps extends Partial<AbsoluteCssProps> {
  placeholder?: string;
  type: string;
  value?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/* Editor */
declare interface EditorProps extends Partial<AbsoluteCssProps> {
  placeholder?: string;
  limit?: number;
  defaultValue?: string;
  getEditorLength?: (langth: number) => void;
  getEditorValue: (value: string) => void;
  isDisabled?: boolean;
}

/* Empty */
declare interface EmptyProps extends Partial<AbsoluteCssProps> {
  text: string;
}

/* ErrorMessage */
declare interface ErrorMessageProps extends Partial<AbsoluteCssProps> {
  text: string;
  isError: boolean;
}

/* CommonSwiper */
declare module 'CommonSwiper' {
  import { SwiperProps } from 'swiper/react';
  interface CommonSwiperProp extends SwiperProps {
    children: React.ReactNode;
    top?: string;
    left?: string;
  }
}

/* Progress */
declare interface ProgressProps {
  isLoading: boolean;
}
