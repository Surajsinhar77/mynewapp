import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        // CredentialsProvider({
        // name: "Credentials",
        // credentials: {
        //     email: {
        //     label: "email",
        //     type: "email",
        //     placeholder: "name123@gmail.com",
        //     },
        //     password: { label: "Password", type: "password" },
        // },
        // async authorize(credentials, req) {
        //     console.log(req.body);
        //     const user = {
        //     id: 1,
        //     email: req.body.email,
        //     };

        //     if (user) {
        //     // Any object returned will be saved in `user` property of the JWT
        //     return user;
        //     } else {
        //     // If you return null then an error will be displayed advising the user to check their details.
        //     return null;
        //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //     }
        // },
        // }),
        GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    // callbacks: {
    //     async jwt(token, user) {
    //     if (user) {
    //         token.id = user.id;
    //         token.email = user.email;
    //     }
    //     return token;
    //     },
    // },
};

export default NextAuth(authOptions);

// GithubProvider({
//   clientId: "554ef0348ffe2f772683",
//   clientSecret: "5c2b724c4d4d9773a277967e3eb05a66089aeb68",
// }),
