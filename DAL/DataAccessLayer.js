import "server-only";

import { cache } from "react";

import prisma from "@/_lib/_base";
import { decrypt } from "@/_lib/session";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (session && !session.userId) {
    redirect("/");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const { userId } = verifySession();

  console.log(userId);

  if (!userId) {
    return redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
});
