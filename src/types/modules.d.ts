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
