import { FC } from "react";
import CreateTask from "./CreateTask";

const NoTasks: FC<unknown> = () => {
  return (
    <section className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-center text-2xl">🎉 You are all caught up 🎉</h1>
      </div>
      <CreateTask />
    </section>
  );
};

export default NoTasks;
