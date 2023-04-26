import { Hero } from "@/Components/Home/Hero/Hero";
import LatestPosts from "@/Components/Home/LatestPosts/LatestPosts";
import WeeklyPopular from "@/Components/Home/WeelyPopular/WeeklyPopular";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Story Verse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dicnezd6a/image/upload/v1682523173/favicon_oleadq.ico" />
      </Head>

      <Hero />
      <WeeklyPopular />
      <LatestPosts />
    </main>
  );
}
