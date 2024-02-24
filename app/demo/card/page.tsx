export default function CardSample() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-slate-300">

      {/* Card */}
      <div className={"min-w-72 w-full max-w-screen-sm p-5 bg-white rounded-2xl flex flex-col space-y-3 shadow-xl text-xs"}>

        {/* Destination */}
        <div className={"flex justify-between items-center"}>
          <div className={"flex flex-col items-start"}>
            <div className={"text-slate-500"}>In transit</div>
            <div className={"text-slate-950 font-bold text-xl"}>Coolblue</div>
          </div>
          <div
            className={"flex flex-col aspect-square w-12 bg-orange-600 rounded-full justify-center items-center font-bold text-white"}>
            <span>cool</span>
            <span>blue</span>
          </div>
        </div>

        {/* Expected time */}
        <div className={"flex justify-start space-x-2 items-center text-md font-medium"}>
          <span className={"bg-green-500 text-white px-3 py-1.5 rounded-full uppercase"}>today</span>
          <span className={"text-slate-800"}>9:30-10:30u</span>
        </div>

        {/* Progress Bar */}
        <div className={"relative mt-2 py-1"}>
          <div className={"bg-slate-200 w-full h-3 rounded-full absolute"}/>
          <div className={"bg-orange-500 w-3/4 h-3 rounded-full absolute"}/>
        </div>

        {/* Progress */}
        <div className={"flex justify-between"}>
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className={"text-slate-400"}>Delivered</span>
        </div>
      </div>
    </main>
  );
}
