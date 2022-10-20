import { FC } from "react";
import NewTaskForm from "./NewTaskForm";

const CreateTask: FC<unknown> = () => {
  return (
    <section className="mx-2 my-3 flex-[0]">
      <NewTaskForm />
    </section>
  );
};

export default CreateTask;
