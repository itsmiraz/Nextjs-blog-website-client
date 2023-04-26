import { Hero } from "@/Components/Home/Hero/Hero";
import LatestPosts from "@/Components/Home/LatestPosts/LatestPosts";
import WeeklyPopular from "@/Components/Home/WeelyPopular/WeeklyPopular";

export default function Home() {
  return (
    <main>
      <Hero />
      <WeeklyPopular />
      <LatestPosts />
    </main>
  );
}
