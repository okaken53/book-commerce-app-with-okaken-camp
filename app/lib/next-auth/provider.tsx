"use client";

import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

export const NextAuthProviser: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
