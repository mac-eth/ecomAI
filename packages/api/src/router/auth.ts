import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @ecomai/auth package
    return "you can see this secret message!";
  }),

  getuser: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user;
  }),
});
