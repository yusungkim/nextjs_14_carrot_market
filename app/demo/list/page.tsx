export default function ListSample() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-slate-300">

      {/* Card */}
      <div className="
        *:transition
        justify-center items-start bg-white p-5 rounded-md w-full max-w-screen-sm
        flex flex-col gap-2">
        {["Kim", "Me", "You", "", "Shasha", "Tenho"].map((name, index) => (
          <div key={index} className="border-b-2 last:border-b-0 border-slate-200 py-2 w-full *:even:bg-blue-100 *:odd:bg-slate-100">
            <div className="flex gap-2 items-center w-full p-2 rounded-xl
              hover:scale-105 transition hover:shadow-lg
              active:bg-red-500 active:scale-95 duration-100
              group
              ">

              {/* Avatar */}
              <div className="size-8 bg-blue-400 rounded-full"/>

              {/* Name */}
              <span className="empty:w-20 empty:bg-slate-400 empty:h-4 empty:animate-pulse rounded-full
              group-hover:text-red-500">
                {name}
              </span>

              {/* Number badge */}
              <div className="size-6 bg-red-500 rounded-full text-white flex justify-center items-center relative">
                <span className="z-10">{index}</span>
                <div className="size-6 bg-red-500 animate-ping rounded-full absolute"/>
              </div>

              {/* New tag */}
              <div className="relative flex px-20">
                <span className="z-10 text-red-500 px-2">New</span>
                <span className="animate-ping text-red-500 px-2 absolute">New</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
