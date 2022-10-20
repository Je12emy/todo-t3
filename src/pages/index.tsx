import type { NextPage } from "next";
import Loader from "../components/Loader";
import NoTasks from "../components/NoTasks";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["task.all"]);

  if (isLoading) {
    return <Loader message="Loading tasks" />;
  }

  if (!data || data.length === 0) {
    return <NoTasks />;
  }

  return <pre> {JSON.stringify(data)} </pre>;
};

export default Home;
