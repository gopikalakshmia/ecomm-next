import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDb } from "../db"; // or adjust if needed

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(connectToDb().then((res) => res.client)),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { db } = await connectToDb();
        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        if (!user || credentials?.password !== user.password) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const { db } = await connectToDb();
        const existingUser = await db
          .collection("users")
          .findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("users").insertOne({
            email: user.email,
            name: user.name,
          });
        }

        if (!existingUser?.password) {
          const query = new URLSearchParams({
            email: user.email ?? "", // fallback to empty string if null or undefined
            name: user.name ?? "",
          });
          return "/setPassword?" + query.toString();
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
