import Link from "next/link";
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/20/solid";

export default function CreateAccount() {
  return (
    <main className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-slate-400"
            type="text" placeholder="Username" required/>
          <span className="text-red-500 font-medium">Input error</span>
        </div>
        <button
          className="w-full primary-btn"
          type="submit">Create Account</button>
      </form>
      <div className="w-full h-px bg-neutral-400" />
      <div className="w-full flex flex-col">
        <Link
          className="primary-btn w-full flex items-center justify-center gap-2"
          href="/sms">
          <span><ChatBubbleOvalLeftEllipsisIcon className="h-6 aspect-square"/></span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </main>
  )
}