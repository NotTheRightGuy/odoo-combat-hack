import React from "react";
import LandingNavbar from "@/components/ui/LandingNavbar";

export default function page() {
  return (
    <div>
      <LandingNavbar />
      <div className="relative flex flex-col items-center justify-center px-12 pb-48 pt-12 mt-10 md:pt-24">
        <div className="mb-1.5 rounded-full bg-zinc-600">
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
          >
            <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
              HEY!
            </span>
            <span className="ml-1.5 mr-1 inline-block">
              We're Odoo Combat Hack
            </span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 inline-block"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1={7} y1={17} x2={17} y2={7} />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
        <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-6xl md:leading-[1.15]">
          Managing your Library just got easier
        </h1>
        <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-xl md:leading-relaxed">
          We know it can be hard to manage a library, so we made it easier for
          you. This is a library management system that helps you manage your
          library with ease.
        </p>
        <button className="rounded-lg bg-indigo-600 p-3 uppercase text-white transition-colors hover:bg-indigo-700">
          <span className="font-bold">Get started - </span> no hassle required
        </button>
        <div className="absolute bottom-0 left-1/2 h-36 w-[calc(100vw_-_56px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-900 p-0.5">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-0.5">
              <span className="size-2 rounded-full bg-red-400" />
              <span className="size-2 rounded-full bg-yellow-400" />
              <span className="size-2 rounded-full bg-green-400" />
            </div>
            <span className="rounded bg-zinc-600 px-2 py-0.5 text-xs text-zinc-100">
              localhost:3000
            </span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className="relative z-0 grid h-full w-full grid-cols-[100px,_1fr] overflow-hidden rounded-t-lg bg-white md:grid-cols-[150px,_1fr]">
            <div className="h-full border-r border-zinc-300 p-2">
              <svg
                width={32}
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-fit fill-zinc-950"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  stopColor="#09090B"
                />
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  stopColor="#09090B"
                />
              </svg>
              <div className="mt-3 space-y-1.5">
                <span className="flex items-center gap-1.5 text-xs text-indigo-600">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Messages</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Tasks</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1={8} y1={6} x2={21} y2={6} />
                    <line x1={8} y1={12} x2={21} y2={12} />
                    <line x1={8} y1={18} x2={21} y2={18} />
                    <line x1={3} y1={6} x2="3.01" y2={6} />
                    <line x1={3} y1={12} x2="3.01" y2={12} />
                    <line x1={3} y1={18} x2="3.01" y2={18} />
                  </svg>
                  <span>Board</span>
                </span>
              </div>
            </div>
            <div className="relative z-0 p-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded bg-zinc-200 px-1.5 py-1 pr-8 text-xs text-zinc-600">
                  Search...
                </span>
                <div className="flex items-center gap-1.5 text-xl">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
              </div>
              <div className="h-full rounded-xl border border-dashed border-zinc-500 bg-zinc-100" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/0 to-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
