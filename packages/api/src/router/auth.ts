import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @ecomai/auth package
    return "you can see this secret message!";
  }),
});
