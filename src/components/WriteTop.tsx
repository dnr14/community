import BackIcon from 'common/BackIcon';
import Button from 'common/Button';
import CommunityTop from 'common/CommunityTop';
import Text from 'common/Text';
import useGoback from 'hooks/useGoback';
import { useAppDispatch, useTypedSelector } from 'modules/store';
import BaseLine from 'common/BaseLine';
import http from 'api/http';
import useFileUpload from 'hooks/useFileUpload';
import { useHistory } from 'react-router-dom';
import { setWriteSliceInit } from 'modules/slices/writeSlice';

const WriteTop = () => {
  const handleGoback = useGoback();
  const { replace } = useHistory();
  const { content, title, category, images } = useTypedSelector(({ write }) => write);
  const isDisabled = content === '' || title === '';
  const { multiUpload } = useFileUpload();
  const dispatch = useAppDispatch();

  const handleCreateCommunityPost = async () => {
    const { categoryName, categoryPk } = category;

    const createImgUrls = (images: Image[]) => {
      const urls = images.map(({ url }) => url);
      return multiUpload(urls);
    };

    const createProfileImg = () => {
      const index = Math.floor(Math.random() * 4);
      const imgName = ['chick', 'fox', 'ailien', 'purple-devil'][index];
      return `https://static.zaritalk.com/profiles/profile-57-img-${imgName}-39-39%403x.png`;
    };

    const createKoISO = () => {
      const date = new Date();
      const offset = date.getTimezoneOffset() * 60000;
      const dateOffset = new Date(date.getTime() - offset);
      return dateOffset.toISOString().split('.')[0];
    };

    const createPost: CreatePostFun = (categoryPk, categoryName, title, content, imageUrl) => {
      return {
        categoryPk,
        categoryName,
        title,
        content,
        viewCount: 0,
        likeCount: 0,
        commentCount: 0,
        imageUrl,
        writtenAt: createKoISO(),
        writerNickName: '무늬만여우',
        writerProfileUrl: createProfileImg(),
      };
    };

    const imageUrl = images ? (await createImgUrls(images)).map(({ Location }) => Location) : images;
    await http.post<Post>('/posts', createPost(categoryPk, categoryName, title, content, imageUrl));
    if (images) images.forEach(({ url }) => URL.revokeObjectURL(url));
    dispatch(setWriteSliceInit());
    replace('/community/list');
  };

  return (
    <CommunityTop>
      <BackIcon handleGoBack={handleGoback} />
      <Text
        text="글쓰기"
        lineHeight="21px"
        height="21px"
        left="45%"
        right="44.17%"
        top="calc(50% - 21px / 2 - 0.5px)"
      />
      <Button
        width="64px"
        height="36px"
        top="10px"
        left="286px"
        disabled={isDisabled}
        onClick={handleCreateCommunityPost}
      >
        완료
      </Button>
      <BaseLine top="56px" />
    </CommunityTop>
  );
};

export default WriteTop;
