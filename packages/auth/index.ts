/* eslint-disable @typescript-eslint/unbound-method */
/* @see https://github.com/nextauthjs/next-auth/pull/8932 */

import type { DefaultSession } from "@auth/core/types";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { db, tableCreator } from "@ecomai/db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, tableCreator),
  providers: [GitHub],
  callbacks: {
    jwt({ token, profile }) {
      if (profile) {
        token.id = profile.id;
        token.image = profile.avatar_url || profile.picture;
      }
      return token;
    },
    authorized({ auth }) {
      return !!auth?.user; // this ensures there is a logged in user for -every- request
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        image: user.image,
        name: user.name,
      },
    }),
  },
  pages: {
    signIn: "/sign-in", // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
  },
});
