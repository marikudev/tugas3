import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchJoke } from "../lib/fetchJoke";

export default async function HomePage() {
  const joke = await fetchJoke();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Chuck Norris Joke</CardTitle>
        <CardDescription>
        {joke.value}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <a
          href={joke.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button type="button" className="w-full">
            Lihat Joke
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
