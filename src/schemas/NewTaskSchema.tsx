import { z } from "zod";

const NewTaskSchema = z.object({
  task: z
    .string({
      required_error: "Please enter some text",
    })
    .min(1)
    .max(40)
    .trim(),
});

export type NewTaskSchemaType = z.infer<typeof NewTaskSchema>;

export default NewTaskSchema;
