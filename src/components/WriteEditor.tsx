import Editor from 'common/Editor';
/* 에디터 value는 WriteEditor에서 관리하기위해서 Editor 래퍼 컴포넌트 생성  */
const WriteEditor = () => {
  const placeholder =
    '내용을 작성해주세요.\n\n◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!\n◎ 뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.\n◎ 광고글 금지. 서비스 이용이 제한됩니다.';

  return (
    <>
      <Editor top="159px" left="20px" width="320px" height="179px" placeholder={placeholder} limit={300} />
    </>
  );
};

export default WriteEditor;
