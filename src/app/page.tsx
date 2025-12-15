"use client";

// ============================================
// INTERVIEW CHALLENGE: Alert Track
// ============================================
// Your task: Implement an alert system with timed, dismissable alerts
// See document.txt for full requirements
// ============================================

export default function Home() {
  // ----------------------------------------
  // TODO: Add your state management here
  // ----------------------------------------

  // ----------------------------------------
  // TODO: Add your alert creation handler here
  // ----------------------------------------

  return (
    <div className="min-h-screen bg-black flex relative">
      {/* ---------------------------------------- */}
      {/* TOP-LEFT: Alerts for Button 1 go here   */}
      {/* ---------------------------------------- */}
      <div className="absolute top-4 left-4 w-72 flex flex-col gap-2">
        {/* TODO: Render Alert 1 alerts here */}
      </div>

      {/* ---------------------------------------- */}
      {/* TOP-RIGHT: Alerts for Button 2 go here  */}
      {/* ---------------------------------------- */}
      <div className="absolute top-4 right-4 w-72 flex flex-col gap-2">
        {/* TODO: Render Alert 2 alerts here */}
      </div>

      {/* ---------------------------------------- */}
      {/* CENTER: Alert trigger buttons           */}
      {/* ---------------------------------------- */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <button className="w-36 h-10 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
            Alert 1
          </button>
          <button className="w-36 h-10 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
            Alert 2
          </button>
          <button className="w-36 h-10 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
            Alert 3
          </button>
          <button className="w-36 h-10 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700">
            Alert 4
          </button>
        </div>
      </div>

      {/* ---------------------------------------- */}
      {/* BOTTOM-LEFT: Alerts for Button 3 go here */}
      {/* ---------------------------------------- */}
      <div className="absolute bottom-4 left-4 w-72 flex flex-col gap-2">
        {/* TODO: Render Alert 3 alerts here */}
      </div>

      {/* ---------------------------------------- */}
      {/* BOTTOM-RIGHT: Alerts for Button 4 go here */}
      {/* ---------------------------------------- */}
      <div className="absolute bottom-4 right-4 w-72 flex flex-col gap-2">
        {/* TODO: Render Alert 4 alerts here */}
      </div>
    </div>
  );
}
