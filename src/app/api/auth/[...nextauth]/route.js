import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// Fake users (for credentials login)
// const fakeUsers = [
//   { id: "1", name: "Aftab", email: "aftab@gmail.com", password: "12345" },
//   { id: "2", name: "Hasan", email: "hasan@gmail.com", password: "11111" },
// ];


export const authOptions = {
  providers: [
    // Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Manual Login (email + password)
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const res = await fetch("https://artify-server-nextjs.vercel.app/allusers");
        const fakeUsers = await res.json();
        const user = fakeUsers.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password
        );

        if (!user) {
          return null; // invalid
        }

        return user; // valid
      },
    }),
  ],

  // Session settings
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
