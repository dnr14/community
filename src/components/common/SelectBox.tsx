import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { createFlexBox, themeColorGray1, themeColorWhite, themeFontSizePrimary } from 'src/assets/styles/theme';
import styled, { css } from 'styled-components';

const SelectBox: FC<SelectBoxProps> = ({ defaultValue, children, setSelectedId, setSelectedText, ...rest }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [visible, setVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const isClosed = useRef<boolean>(false);
  const el = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      e.preventDefault();

      const { target } = e;

      if (target instanceof HTMLElement) {
        setSelected(target.innerText);
        setVisible(false);
        isClosed.current = true;
        if (setSelectedText instanceof Function && setSelectedText !== undefined) {
          setSelectedText(target.innerText);
        }
        if (setSelectedId instanceof Function && setSelectedId !== undefined) {
          setSelectedId(target.id);
        }
      }
    },
    [setSelectedId, setSelectedText],
  );

  const handleCloseClickOutside = useCallback(
    (e: any) => {
      if (isOpen && (!el.current || !el.current.contains(e.target))) {
        setVisible(false);
        isClosed.current = true;
      }
    },
    [isOpen],
  );

  useEffect(() => {
    window.addEventListener('click', handleCloseClickOutside);
    return () => window.removeEventListener('click', handleCloseClickOutside);
  }, [handleCloseClickOutside]);

  useEffect(() => {
    if (!visible && isOpen && !isClosed.current) {
      // selectBox 컴포넌트 생성되는 시간
      setTimeout(() => setVisible(true), 200);
    } else if (isClosed.current) {
      // selectBox 컴포넌트 없어지는 시간
      setTimeout(() => setIsOpen(false), 200);
      isClosed.current = false;
    }
  }, [visible, isOpen, setIsOpen]);

  return (
    <SelectBoxContainer ref={el} {...rest}>
      <SelectedWrapper onClick={handleOpen}>
        {selected}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className="arrow_svg"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </SelectedWrapper>
      {isOpen && (
        <SelectList visible={visible} onClick={handleClose}>
          {children}
        </SelectList>
      )}
    </SelectBoxContainer>
  );
};

const OpenCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const CloseCss = css`
  transition: opacity 0.35s, transform 0.5s, z-index 0.2s ease-in;
`;

const SelectBoxContainer = styled.div<SelectBoxProps>`
  position: absolute;
  ${({ top, left, width, height }) => css`
    top: ${top};
    left: ${left};
    width: ${width};
    height: ${height};
  `}
`;

const SelectedWrapper = styled.div`
  ${createFlexBox('space-between', 'center')};
  background: ${themeColorWhite};
  border-radius: 4px;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: ${themeFontSizePrimary};
  .arrow_svg {
    width: 1rem;
    height: 1rem;
  }
`;

const SelectList = styled.ul<{ visible: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  background: ${themeColorWhite};
  border: 1px solid ${themeColorGray1};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: opacity 0.5s, transform 0.35s, z-index 0.35s ease-in;
  transform: translateY(-50%);

  ${({ visible }) => (visible ? OpenCss : CloseCss)}

  li {
    cursor: pointer;
    font-size: 11px;
    line-height: 15px;
    padding: 5px 10px;
    ${createFlexBox('flex-start', 'center')};
  }
  li + li {
    border-top: 1px solid rgb(241, 243, 245);
  }
  li:hover {
    background: rgb(248, 249, 250);
    & > span {
      font-weight: bold;
    }
  }
`;
export default SelectBox;
