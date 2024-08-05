export const fetcher = async (key: string) => {
  const url = '/api' + key;
  const res = await fetch(url);
  return res.json();
};
