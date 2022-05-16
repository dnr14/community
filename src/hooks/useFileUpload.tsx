import { useCallback } from 'react';
import { s3Upload } from 'utils/upload';
import { v4 } from 'uuid';

const useFileUpload = () => {
  const convertURLtoFile = useCallback(async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const filename = url.split('/').pop() ?? v4();
    const metadata = { type: data.type };
    return new File([data], filename, metadata);
  }, []);

  const multiUpload = useCallback(
    (urls: string[]) => {
      const finishedList = urls.map(async url => {
        const file = await convertURLtoFile(url);
        return s3Upload(file);
      });
      return Promise.all(finishedList);
    },
    [convertURLtoFile],
  );

  return { multiUpload };
};

export default useFileUpload;
