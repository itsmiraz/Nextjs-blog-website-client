import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-[800px] flex justify-center items-center text-center bg-gradient-to-t from-[#EE0772] to-[#EF3F48]">
      <Head>
        <title>404 - Storyverse</title>
        <meta name="storyverse" content="storyverse blog website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dicnezd6a/image/upload/v1682523173/favicon_oleadq.ico"
        />
      </Head>
      <div>
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white ">LOOKS LIKE YOU <br /> LOST YOUR WAY</p>
        <Link href="/">
          <p className="px-4 py-2 text-white border-2 my-4 border-white">Go back to the homepage</p>
        </Link>
      </div>
    </div>
  );
}
