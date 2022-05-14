declare type ErrorsKeys = 'title' | 'content' | 'category';
declare interface Error {
  isError: boolean;
  message: string;
}

declare interface WriteSliceInit {
  title: string;
  content: string;
  category: Category | null;
  errors: {
    [key in ErrorsKeys]: Error | null;
  };
}
