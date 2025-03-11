import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'

import Google from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const config = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [Google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl

      if (pathname === '/middleware') {
        return !!auth
      }

      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
