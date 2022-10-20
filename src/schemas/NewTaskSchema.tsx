import { z } from "zod";

const NewTaskSchema = z.object({
  task: z.string().min(1).max(40),
});

export type NewTaskSchemaType = z.infer<typeof NewTaskSchema>;

export default NewTaskSchema;
