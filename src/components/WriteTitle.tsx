import BaseLine from 'common/BaseLine';
import Input from 'common/Input';
import { addTitle } from 'modules/slices/writeSlice';
import { useAppDispatch } from 'modules/store';
import useDebounce from 'hooks/useDebounce';
import { useCallback, useEffect, useState } from 'react';

import {
  errorMessages,
  isHtmlTag,
  isMaxLength,
  RegularExpressionError,
  RegularExpressionErrorType,
} from 'utils/validation';
import ErrorMessage from './common/ErrorMessage';

const WriteTitle = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<RegularExpressionErrorType>({});
  const TITLE_ID = 'title';
  const TITLE_MAX_LENGTH = 100;

  const dispatch = useAppDispatch();
  const debounce = useDebounce();

  /**
   * title 유효성 검사
   * @param value title value
   * 제목은 HTML태그 형식의 값은 입력하지 못합니다.
   * 제목은 100자 이상은 입력하지못합니다.
   */
  const handleTitleValidation = useCallback((value: string) => {
    try {
      if (isHtmlTag(value)) {
        throw new RegularExpressionError(TITLE_ID, errorMessages.NOT_HTML);
      }
      if (isMaxLength(value, TITLE_MAX_LENGTH)) {
        throw new RegularExpressionError(TITLE_ID, `${errorMessages.MAX_LENGTH} 최대 ${TITLE_MAX_LENGTH} 입니다.`);
      }

      return true;
    } catch (error) {
      if (error instanceof RegularExpressionError) setError(error.getError());
      return false;
    }
  }, []);

  const handleOnChange = useCallback(
    ({ target }: InputChangeEvent) => {
      const newTitleValue = target.value;
      setError({});
      if (handleTitleValidation(newTitleValue)) setTitle(newTitleValue);
    },
    [handleTitleValidation],
  );

  /*
   * handleOnChange에서 바로 dispatch를 하게되면 사용자가 입력을할 때마다 dispatch가 호출된다.
   * 실시간으로 유효성 검사를 하고 유효한 값 한번만 dispatch되도록 useEeffect 안에서 처리했다.
   * 100번 연속 타자를 쳐도 debounce를 통해서 이벤트를 제어하고 마지막 한번만 dispatch된다.
   */
  useEffect(() => {
    debounce(() => dispatch(addTitle(title)), 400);
  }, [debounce, dispatch, title]);

  return (
    <>
      <Input
        type="text"
        top="114px"
        left="20px"
        placeholder="제목을 작성해주세요"
        maxLength={100}
        value={title}
        onChange={handleOnChange}
      />
      <ErrorMessage
        text={error[TITLE_ID]?.message}
        isError={error[TITLE_ID]?.isError}
        width="324px"
        left="20px"
        top="140px"
        height="30px"
      />
      <BaseLine top="148px" />
    </>
  );
};

export default WriteTitle;
