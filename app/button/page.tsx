import React from 'react';

const page = () => {
  return (
    <div className="h-screen w-full bg-slate-300 flex items-center justify-center">
      {/* BUTTON */}
      <div className="relative w-32 h-15.5 group cursor-pointer">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* FILL — INSIDE BORDER */}
          <div className="absolute top-1.25 opacity-0 group-hover:opacity-100 bottom-1.25 left-1.25 right-2.25 bg-black " />

          {/* TOP BORDER */}
          <div
            className="absolute top-0 left-0 w-full h-1.5 bg-repeat-x bg-top"
            style={{
              backgroundImage: "url('/top.png')",
              backgroundSize: '200px 6px',
            }}
          />

          {/* BOTTOM BORDER */}
          <div
            className="absolute bottom-0 left-0 w-full h-1.5 bg-repeat-x bg-top"
            style={{
              backgroundImage: "url('/bottom.png')",
              backgroundSize: '190px 6px',
            }}
          />

          {/* LEFT BORDER */}
          <div
            className="absolute top-2 left-0 w-1.5 h-[calc(100%-12px)] bg-repeat-y bg-top"
            style={{
              backgroundImage: "url('/left.png')",
              backgroundSize: '6px 70px',
            }}
          />

          {/* RIGHT BORDER */}
          <div
            className="absolute top-1.5 right-1 w-1.5 h-[calc(100%-12px)] bg-repeat-y bg-top"
            style={{
              backgroundImage: "url('/right.png')",
              backgroundSize: '6px 70px',
            }}
          />
        </div>

        {/* FOREGROUND */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <span className="font-medium text-2xl text-black  group-hover:text-white">
            くわしく
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
