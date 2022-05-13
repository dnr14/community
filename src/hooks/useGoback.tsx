import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * 뒤로가기 버튼 이벤트
 * @returns
 */
const useGoback = () => {
  const { goBack } = useHistory();
  const handleGoback = useCallback(() => goBack(), [goBack]);

  return handleGoback;
};

export default useGoback;
