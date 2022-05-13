import ReactQuill from 'react-quill';
import * as Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import styled, { css } from 'styled-components';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { themeColorGray2, themeFontSizePrimary } from 'assets/styles/theme';

/**
   @param placeholder 에디터에 보여줄 placeholder 값  
   @param limit 최대 입력 가능한 글자 default max 50 
   @param htmlValue 에디터에 입력한 글자 html형태로 반환한다.
   @param getEdiotrLength 현재 입력한 글자의 숫자 html갯수가 아닌 텍스트 갯수를 반환한다.
   @param isDisabled disabled 유무 
   @param rest 스타일 관련 props
 */
const Editor: FC<EditorProps> = ({ placeholder, limit = 50, htmlValue = '', getEdiotrLength, ...rest }) => {
  const [currentHtml, setHtml] = useState(htmlValue);
  const [currentLimit, setCurrentLimit] = useState(0);
  const quillRef = useRef<ReactQuill>();
  const MAX_LENGTH = useMemo(() => limit, [limit]);

  const { width, left, height, top } = rest;

  const style = {
    width,
    height,
    top,
    left,
  };

  const noToolbar = useMemo(
    () => ({
      toolbar: false,
    }),
    [],
  );

  const handleRef = useCallback((element: ReactQuill | null) => {
    if (element !== null) {
      quillRef.current = element;
    }
  }, []);

  const hanldeOnChange = useCallback(
    (html: string, delta: Quill.Delta, source: Quill.Sources, editor: any) => {
      if (quillRef.current && MAX_LENGTH) {
        const unprivilegedEditor = quillRef.current.getEditor();
        const currentLength = unprivilegedEditor.getLength() - 1;

        if (currentLength > MAX_LENGTH) {
          unprivilegedEditor.deleteText(MAX_LENGTH, unprivilegedEditor.getLength());
        } else {
          setHtml(html);
          setCurrentLimit(editor.getLength() - 1);
          if (getEdiotrLength instanceof Function) getEdiotrLength(currentLength);
        }
      }
    },
    [MAX_LENGTH, getEdiotrLength],
  );

  return (
    <EditorWrapper {...style}>
      <ReactQuill
        ref={handleRef}
        onChange={hanldeOnChange}
        modules={noToolbar}
        placeholder={placeholder}
        theme="snow"
      />
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div<EditorProps>`
  position: absolute;
  ${({ top, width, height, left, lineHeight, fontWeight, fontSize }) => css`
    top: ${top};
    width: ${width};
    height: ${height};
    left: ${left};
    & .quill {
      height: ${height};
    }
    & .ql-editor {
      padding: 0;
      font-size: ${fontSize ?? themeFontSizePrimary};
      overflow-y: hidden;
    }
    & .ql-container {
      border: none;
    }
    & .ql-editor.ql-blank::before {
      font-family: 'Noto Sans KR', sans-serif;
      font-style: normal;
      left: 0;
      right: 0;
      line-height: ${lineHeight ?? '24px'};
      font-weight: ${fontWeight ?? '500'};
      color: ${themeColorGray2};
      font-size: ${fontSize ?? themeFontSizePrimary};
    }
  `}
`;

export default Editor;
