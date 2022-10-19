import type { NextPage } from "next";
import Head from "next/head";
import BaseLayout from "../components/BaseLayout";
import Navigation from "../components/Navigation";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Navigation /> 
      <p> To-Do </p>
    </BaseLayout>
  );
};

export default Home;
