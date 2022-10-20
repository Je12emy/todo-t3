import { useForm, SubmitHandler } from "react-hook-form";
import type { NewTaskSchemaType } from "../schemas/NewTaskSchema";
import AddTaskButton from "./AddTaskButton";
import AddTaskInput from "./AddTaskInput";

const NewTaskForm = () => {
  const { register, handleSubmit } = useForm<NewTaskSchemaType>();

  const onSubmit: SubmitHandler<NewTaskSchemaType> = (data) => {
    console.info(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row space-x-1">
      <AddTaskInput {...register("task")} />
      <AddTaskButton onClick={() => handleSubmit(onSubmit)} />
    </form>
  );
};

export default NewTaskForm;
