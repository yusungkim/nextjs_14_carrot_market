import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-slate-300">

      {/* Card */}
      <div className="
        *:transition
        justify-center items-start bg-white p-5 rounded-md w-full max-w-screen-sm
        flex gap-2 *:bg-blue-600 *:rounded-2xl *:px-5 *:py-3 *:text-white  *:hover:shadow-2xl">
        <Link href={"/demo/card"} className="hover:scale-105"> Card </Link>
        <Link href={"/demo/list"} className="hover:scale-105"> List </Link>
        <Link href={"/demo/input"} className="hover:scale-105"> Input </Link>
      </div>
    </main>
  );
}
