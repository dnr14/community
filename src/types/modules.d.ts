declare type ErrorsKeys = 'title' | 'content' | 'category';
declare interface Error {
  isError: boolean;
  message: string;
}

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
  errors: {
    [key in ErrorsKeys]: Error | null;
  };
}

declare interface Post {
  categoryPk: number;
  categoryName: string;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string[] | null;
  writtenAt: string;
  writerNickName: string;
  writerProfileUrl: string;
}
