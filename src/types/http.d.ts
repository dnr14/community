import { AxiosRequestConfig } from 'axios';

type GetOrDelete = <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
type PostOrPatch = <P, R = void>(url: string, body?: P, config?: AxiosRequestConfig) => Promise<R>;

export interface HTTPMethod {
  get: GetOrDelete;
  delete: GetOrDelete;
  post: PostOrPatch;
  patch: PostOrPatch;
}
