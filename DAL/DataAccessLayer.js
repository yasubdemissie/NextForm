import prisma from "@/_lib/_base";
import { decrypt } from "@/_lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
  const session = (await cookies())?.get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    redirect("/");
  }

  return { auth: true, userId: payload.id };
});

export const getUser = cache(async () => {
  const { userId } = verifySession();

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
