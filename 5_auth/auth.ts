import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

const config = {
    providers: [Google]
} satisfies NextAuthConfig


export const {auth, handlers, signIn, signOut } = NextAuth(config)