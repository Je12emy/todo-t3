import { createProtectedRouter } from "./context";

export const taskRouter = createProtectedRouter().query("all", {
  resolve({ ctx }) {
    return ctx.prisma.task.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  },
});
