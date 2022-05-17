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
