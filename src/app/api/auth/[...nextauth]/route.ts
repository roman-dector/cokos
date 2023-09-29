import { User } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Почта', type: 'email', required: true },
        password: {
          label: 'Пароль',
          type: 'password',
          required: true,
        },
      },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
