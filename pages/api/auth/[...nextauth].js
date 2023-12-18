import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
    providers: [
        GithubProvider({
          clientId: "554ef0348ffe2f772683",
          clientSecret: "5c2b724c4d4d9773a277967e3eb05a66089aeb68",
        }),
    ],
};

export default NextAuth(authOptions);
