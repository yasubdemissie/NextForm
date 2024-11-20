import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookiesStore = await cookies();

  cookiesStore.set("session", session, {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookiesStore = await cookies();
  const session = cookiesStore.get("session")?.value;
  const payload = typeof session === "string" ? await decrypt(session) : null;

  if (!session || !payload) {
    return null;
  }

  return payload;
}

export async function updateSession(session) {
  const payload = getSession();

  if (!payload) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)(
    await cookies()
  ).set("session", session, {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
}

export async function deleteSession() {
  const expiresAt = new Date(0);
  (await cookies()).set("session", "", {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
}
