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
  children: React.ReactNode;
  getSelectedId?: (id: string) => void;
  getSelectedText?: (text: string) => void;
}

/* Input */
declare interface InputProps extends Partial<AbsoluteCssProps> {
  placeholder?: string;
}

/* Editor */
declare interface EditorProps extends Partial<AbsoluteCssProps> {
  placeholder?: string;
  limit?: number;
  htmlValue?: string;
  getEdiotrLength?: (langth: number) => void;
  isDisabled?: boolean;
}

// 인터페이스 수정
