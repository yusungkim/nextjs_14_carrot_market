import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between items-center p-5">

      {/* Logo & Welcome message*/}
      <div className="flex flex-col gap-2 my-auto justify-center items-center *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">Carrot</h1>
        <h2 className="text-2xl">Welcome to carrot market</h2>
      </div>

      {/* Start button */}
      <div className="flex flex-col gap-2 w-full items-center">
        <Link href="/create-account" className="w-full primary-btn font-medium text-lg p-3">
          Start
        </Link>
        <div className="flex gap-1">
          <span>Already have an account?</span>
          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
