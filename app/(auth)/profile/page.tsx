import db from "@/lib/db"
import getSession from "@/lib/session"
import { notFound, redirect } from "next/navigation"

async function getUser() {
  const session = await getSession()
  if (!session.id) notFound()
  const user = await db.user.findUnique({
    where: {
      id: session.id,
    },
    select: {
      username: true,
      email: true,
      avatar: true,
    }
  })
  if (user) return user
  notFound()
}

export default async function ProfilePage() { 
  const user = await getUser()
  const logout = async () => {
    "use server";
    const session = await getSession()
    session.destroy()
    redirect("/")
  }
  return (
    <div>
      <h1>Welcome! {user?.username}</h1>
      <form action={logout}>
        <button>Logout</button>
      </form>
    </div>
  )
}
