import useSWR from "swr";
import { fetcher } from "../../hooks/useSWR";

export const Name = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{`Your name is ${data.name}!`}</div>;
};
