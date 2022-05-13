interface AbsoluteCssProps {
  top: string;
  left: string;
  bottom: string;
  right: string;
  width: string;
  height: string;
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
  lineHeight?: string;
}

/* Button */
declare interface ButtonProps extends Partial<AbsoluteCssProps> {
  text: string;
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
