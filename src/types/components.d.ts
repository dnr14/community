declare type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
/* WriteTop */
declare type CreatePostFun = (
  categoryPk: number,
  categoryName: string,
  title: string,
  content: string,
  imageUrl: string[] | null,
) => Post;

/* Post */
declare interface PostProps {
  post: Post;
}

/* HomeEmpty */
declare interface HomeEmptyProp {
  text: string;
}
/* Content */
declare interface ContentProps extends Pick<Post, 'title' | 'content' | 'imageUrl'> {
  isTextOverflow?: boolean;
  isDetail?: boolean;
}
/* PostInformation */
declare type PostInformationProps = Pick<Post, 'likeCount' | 'viewCount' | 'commentCount'>;
