import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "./Navigation";

const BaseLayout: NextPage<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>T3-Do</title>
        <meta name="description" content="A to-do list app powered by T3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-900 text-gray-50">
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
