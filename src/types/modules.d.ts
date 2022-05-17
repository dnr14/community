/* writeSlice */
declare interface Category {
  categoryPk: number;
  categoryCode: string;
  categoryName: string;
}

declare interface Image {
  fileName: string;
  url: string;
}

declare interface WriteSliceInit {
  title: string;
  content: string;
  category: Category;
  categories: Category[];
  images: Image[] | null;
}

declare interface Post {
  pk?: number;
  categoryPk: number;
  categoryName: string;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string[] | null | string;
  writtenAt: string;
  writerNickName: string;
  writerProfileUrl: string;
}

/* listSlice */
declare type StatusType = 'loading' | 'idle' | 'success' | 'failed';

declare interface ListSliceInit {
  category: number;
  categories: Category[];
  page: number;
  status: StatusType;
  isLastPage: boolean;
  isEmpty: boolean;
  posts: Post[];
}

declare interface FetchPostsThunkPayload {
  page: number;
  categoryPk: number;
}
declare type CreateFetchArticlesPayloadFunc = (
  categoryPk: FetchPostsThunkPayload['categoryPk'],
  page: FetchPostsThunkPayload['page'],
) => FetchPostsThunkPayload;
declare type FetchPostThunkReturn = {
  posts: Post[];
  page: number;
};

/* likeSlice */
declare interface LikeSliceInit {
  likePks: number[];
}
