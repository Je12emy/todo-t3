import { z } from "zod";
import NewTaskSchema from "../../schemas/NewTaskSchema";
import { createProtectedRouter } from "./context";

export const taskRouter = createProtectedRouter()
  .query("all", {
    resolve({ ctx }) {
      return ctx.prisma.task.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
    },
  })
  .mutation("create", {
    input: NewTaskSchema,
    async resolve({ input, ctx }) {
      const task = await ctx.prisma.task.create({
        data: {
          text: input.task,
          userId: ctx.session.user.id,
        },
      });
      return task;
    },
  });
