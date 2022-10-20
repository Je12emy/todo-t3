import { z } from "zod";
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
    input: z.object({
      text: z.string().min(1).max(40),
    }),
    async resolve({ input, ctx }) {
      const task = await ctx.prisma.task.create({
        data: {
          text: input.text,
          userId: ctx.session.user.id,
        },
      });
      return task;
    },
  });
