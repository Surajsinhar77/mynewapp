import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Email and Password",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "name123@gmail.com",
                },
                password: { label: "Password", type: "password", placeholder : "password"},
            },
            // The credentials is used to generate a suitable form on the sign in page.
            async authorize(credentials, req) { 
                try {
                    const response = await prisma.user.findUnique({where: {email: credentials.email}});    
                    if (response) { 
                        const passwordMatch = await bcrypt.compare(credentials.password, response.password);
                        if (passwordMatch) {
                            return response;
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.log("this is the error in the authorize function ", error);
                }
            },
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
        // }),
    ],
};

export default NextAuth(authOptions);