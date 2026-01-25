import { connect } from "@/app/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

const userList = [
  { name: "hablu", password: "1234" },
  { name: "dablu", password: "5678" },
  { name: "bablu", password: "8901" },
];

export const authOptions = {
  trustHost: true,
  providers: [
    CredentialsProvider({
      name: "Email & Password",

      credentials: {
        // username: { label: "Username", type: "text", placeholder: "hablu" },
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Password" },
        // SecretCode: { label: "Secret Code", type: "text", placeholder: "Enter Secret Code" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;
        try {
          // connect() is synchronous now but returns a collection that we can use
          const collection = connect("users");
          if (!collection) {
            console.error("Failed to connect to users collection");
            return null;
          }
          const user = await collection.findOne({ email: email });

          if (!user) return null;

          // match password
          const isPassWordOk = await bcrypt.compare(password, user?.password || "");

          if (isPassWordOk) {
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              role: user.role
            };
          }
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token
    }
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "default_secret_for_development",
  pages: {
    error: '/api/auth/error',
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


