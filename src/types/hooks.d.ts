/* useDebounce */
declare type DebounceFunc = (callback: () => void, delay?: number) => void;
/* useThrottling */
declare type ThrottlingFunc = (callback: () => void, delay?: number) => void;
/* useInfinityScroll */
declare type UseInfinityScrollFunc = (
  page: number,
  status: StatusType,
  callback: (page: number) => void,
) => HandleObserver;

declare type HandleObserverFunc = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

declare type HandleObserver = (node: HTMLElement | null) => void;
