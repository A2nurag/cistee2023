import React from "react";
import Link from "next/link";

export default function SideBar({ setClicked }) {
  const linkClassPC = "py-3 text-zinc-100 font-medium";

  return (
    <div className="fixed inset-0 z-[9999] max-w-7xl bg-zinc-900 px-2 transition-all">
      <div className="flex justify-between items-center h-16">
        <p className="text-slate-100 font-bold">CISTEE 2023</p>
        <a onClick={() => setClicked(false)} className="p-2 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-zinc-300"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>
      </div>

      <div className="flex flex-col divide-y divide-zinc-700">
        <Link href="/" className={linkClassPC} title="Home">
          Home
        </Link>
        <Link href="/dates" className={linkClassPC} title="Dates">
          Dates
        </Link>
        <Link href="/registration" className={linkClassPC} title="Registration">
          Registration
        </Link>
        <Link
          href="/callForPapers"
          className={linkClassPC}
          title="Call For Papers"
        >
          Call for Papers
        </Link>
        <Link
          href="/paperSubmission"
          className={linkClassPC}
          title="Paper Submission"
        >
          Paper Submission
        </Link>
        <Link href="/committee" className={linkClassPC} title="Committee">
          Committee
        </Link>
        <Link href="/program" className={linkClassPC} title="Program">
          Venue & Program
        </Link>
        <Link href="/keynote" className={linkClassPC} title="Keynote">
          Keynote Speakers
        </Link>
      </div>
    </div>
  );
}
