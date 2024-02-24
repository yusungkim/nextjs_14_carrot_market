export default function InputSample() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-slate-300">

      {/* Card */}
      <div className="
        *:outline-none
        *:transition
        has-[:invalid]:bg-red-100  transition
        min-w-72 w-full max-w-screen-sm p-5 gap-2 bg-white rounded-2xl flex flex-col md:flex-row shadow-xl text-xs justify-center items-center">

        <input
          type="email"
          placeholder="Email address"
          required
          className="w-full p-3 rounded-lg bg-slate-100 py-3 focus:ring ring-offset-2
          ring-green-500 placeholder-slate-500
          peer invalid:focus:ring-red-500" />

        <span className="md:hidden text-red-500 hidden h-full w-full peer-invalid:block md:peer-invalid:hidden">Email is required</span>

        <button
          className="w-full md:max-w-24 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-400 py-2 text-white font-medium active:scale-[95%]
          outline-none peer-invalid:bg-red-500">
          Login
        </button>
      </div>
    </main>
  );
}
