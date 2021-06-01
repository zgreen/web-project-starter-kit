import useSWRCore from "swr";

export const fetcher = (url, data = {}) =>
  fetch(url, data).then((res) => res.json());

export const useSWR = (url) => useSWRCore(url, fetcher);
