import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number
}

export default async function getSession() {
  return await getIronSession<SessionContent>(
    cookies(),
    {
      password: process.env.SESSION_ENCRYPTION_KEY!,
      cookieName: process.env.SESSION_COOKIE_NAME!,
      cookieOptions: {
        secure: true,
      },
    }
  )
}