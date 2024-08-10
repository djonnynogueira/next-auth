import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { Session } from "inspector";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials){
                const user = {
                    id: '1',
                    email: 'user@gmail.com',
                    password: '123',
                    name: 'User HardCoded',
                    role: 'admin'
                }
                const isValidEmail = user.email == credentials?.email
                const isValidPassword = user.password == credentials?.password
                
                if(!isValidEmail || !isValidPassword) {
                    return null
                }
                return user
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            const cunstomUser = user as unknown as any

            if (user) {
                return {
                    ...token,
                    role: cunstomUser.role
                }
            }
            return token          
        },

        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    role: token.role
                }
            }
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}