import { nextAuthOptions } from "@/app/lib/next-auth/options";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextAuthOptions);
// import nextAuth from "next-auth";
// const handler = nextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
