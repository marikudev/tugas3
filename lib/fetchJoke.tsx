export interface Joke {
  id: string;
  value: string;
  url: string;
  created_at: string;
  updated_at: string;
  icon_url: string;
}

export const fetchJoke = async (): Promise<Joke> => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");

  if (!res.ok) {
    throw new Error("Failed to fetch joke");
  }

  return res.json();
};
