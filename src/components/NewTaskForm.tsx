import { useForm, SubmitHandler } from "react-hook-form";
import type { NewTaskSchemaType } from "../schemas/NewTaskSchema";
import AddTaskButton from "./AddTaskButton";
import AddTaskInput from "./AddTaskInput";
import { zodResolver } from "@hookform/resolvers/zod";
import NewTaskSchema from "../schemas/NewTaskSchema";

const NewTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTaskSchemaType>({
    resolver: zodResolver(NewTaskSchema),
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<NewTaskSchemaType> = (data) => {
    console.info(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row space-x-1">
      <AddTaskInput error={errors.task?.message} {...register("task")} />
      <AddTaskButton onClick={() => handleSubmit(onSubmit)} />
    </form>
  );
};

export default NewTaskForm;
