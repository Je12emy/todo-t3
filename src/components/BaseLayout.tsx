import type { NextPage } from "next";
import Head from "next/head";

const BaseLayout: NextPage<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>T3-Do</title>
        <meta name="description" content="A to-do list app powered by T3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col bg-gray-900 min-h-screen text-gray-50">{children}</main>
    </>
  );
};

export default BaseLayout;
