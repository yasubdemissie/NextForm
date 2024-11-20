import "server-only";

import { cache } from "react";

import prisma from "@/_lib/_base";
import { decrypt, getSession } from "@/_lib/session";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const session = await getSession();

  if (!session) {
    return { session: null, isAuth: false };
  }

  return { isAuth: true, session: session };
});

export const getUser = cache(async () => {
  const { session } = await verifySession();

  if (!session?.userId) {
    return redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
});
