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
}

/* Button */
declare interface ButtonProps extends Partial<AbsoluteCssProps>, Partial<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
}

/* CommunityTop */
declare interface CommunityTopProps {
  children: React.ReactNode;
}
/* SelectBox */
declare interface SelectBoxProps extends Partial<AbsoluteCssProps> {
  defaultValue?: string | number;
  setSelectedId?: (id: string) => void;
  setSelectedText?: (text: string) => void;
  children: React.ReactNode;
}

/* Input */
declare interface InputProps extends Partial<AbsoluteCssProps>, Partial<HTMLInputElement> {}
