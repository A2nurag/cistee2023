import React, { useState } from "react";
import Link from "next/link";
import SideBar from "./sidebar";
import { ChevronDown } from "react-feather";

export default function Navbar({ pageName }) {
  const [clicked, setClicked] = useState(false);
  const [drop, setDrop] = useState(false);
  const linkClassPC =
    "text-slate-200 font-bold hidden md:flex border-b-transparent border-b-2 hover:border-b-slate-200 transition cursor-pointer user-select-none";
  const linkClassPCActive =
    "text-slate-200 font-bold hidden md:flex border-b-slate-200 border-b-2";
  const bg =
    pageName === "home"
      ? "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.72) 37.5%, rgba(0, 0, 0, 0) 100%)"
      : "";
  return (
    <>
      <nav
        style={{
          background: `${bg}`,
        }}
        className="bg-zinc-900 hover:bg-zinc-900 hidden md:block"
      >
        <div className="flex align-center justify-end gap-10 py-6 px-5 max-w-[1800px]">
          <Link
            href="/"
            className={pageName === "home" ? linkClassPCActive : linkClassPC}
            title="Home - CISTEE 2023"
          >
            Home
          </Link>
          <Link
            href="/dates"
            className={pageName === "dates" ? linkClassPCActive : linkClassPC}
            title="Dates - CISTEE 2023"
          >
            Dates
          </Link>
          <Link
            href="/registration"
            className={
              pageName === "registration" ? linkClassPCActive : linkClassPC
            }
            title="Registration - CISTEE 2023"
          >
            Registration
          </Link>
          <Link
            href="/callForPapers"
            className={
              pageName === "call for papers" ? linkClassPCActive : linkClassPC
            }
            title="Call For Papers - CISTEE 2023"
          >
            Call for Papers
          </Link>
          <Link
            href="/paperSubmission"
            className={
              pageName === "paper submission" ? linkClassPCActive : linkClassPC
            }
            title="Paper Submission - CISTEE 2023"
          >
            Paper Submission
          </Link>
          <Link
            href="/committee"
            className={
              pageName === "committee" ? linkClassPCActive : linkClassPC
            }
            title="Committee - CISTEE 2023"
          >
            Committee
          </Link>
          <Link
            href="/program"
            className={pageName === "program" ? linkClassPCActive : linkClassPC}
            title="Program - CISTEE 2023"
          >
            Venue & Program
          </Link>
          <Link
            href="/keynote"
            className={pageName === "keynote" ? linkClassPCActive : linkClassPC}
            title="Keynote Speakers - CISTEE 2023"
          >
            Keynote Speakers
          </Link>

          <a
            className={pageName === "more" ? linkClassPCActive : linkClassPC}
            onClick={(e) => {
              const drop = document.getElementById("drop");
              drop.classList.toggle("active");
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>

          <div
            className="absolute top-16 right-4 bg-zinc-900 p-6 hidden flex-col gap-6 items-start"
            id="drop"
          >
            <Link
              href="/brochure"
              className={linkClassPC}
              title="Brochure - CISTEE 2023"
            >
              Brochure
            </Link>

            <Link
              href="/manitbhopal"
              className={linkClassPC}
              title="About MANIT Bhopal - CISTEE 2023"
            >
              About MANIT Bhopal
            </Link>

            <Link
              href="/transportation"
              className={linkClassPC}
              title="About Durgapur - Transportation & Climate - CISTEE 2023"
            >
              About Durgapur-Transportation & Climate
            </Link>

            <Link
              href="/template"
              className={linkClassPC}
              title="Template - CISTEE 2023"
            >
              Conference Template
            </Link>

            <Link
              href="/sponsorship"
              className={linkClassPC}
              title="Sponsorship - CISTEE 2023"
            >
              Sponsorship
            </Link>

            <Link
              href="/programschedule"
              className={linkClassPC}
              title="Program Schedule - CISTEE 2023"
            >
              Program Schedule
            </Link>

            <Link
              href="/bankdetails"
              className={linkClassPC}
              title="Bank Details - CISTEE 2023"
            >
              Bank Details
            </Link>

            <Link
              href="/contact"
              className={linkClassPC}
              title="Contact - CISTEE 2023"
            >
              Contact
            </Link>

          </div>
        </div>
      </nav>
      {clicked && <SideBar clicked setClicked={setClicked} pageName />}
      <div className="w-full overflow-hidden bg-zinc-900 lg:hidden">
        <div className="px-2 flex justify-between items-center h-16">
          <Link className="text-slate-100 font-bold" href="/">
            CISTEE 2023
          </Link>
          <a onClick={() => setClicked(true)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu stroke-zinc-300"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
