import Editor from 'common/Editor';
import { useMemo } from 'react';

const WriteContent = () => {
  const placeholder = useMemo(
    () =>
      '내용을 작성해주세요.\n\n◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!\n◎ 뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.\n◎ 광고글 금지. 서비스 이용이 제한됩니다.',
    [],
  );

  return (
    <>
      <Editor
        getEditorValue={content => console.log(content)}
        top="159px"
        left="20px"
        width="320px"
        height="179px"
        placeholder={placeholder}
        limit={300}
      />
    </>
  );
};

export default WriteContent;
