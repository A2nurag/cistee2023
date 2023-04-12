import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

// 16th - 17th dec 2023
export default function Dates() {
  return (
    <>
      <Head>
        <title>Dates | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="dates" />

        <section className="py-20 w-full text-slate-800 min-h-max px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6">DATES</h1>
            <ul className="flex list-inside list-none flex-col gap-4 font-md">
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Full paper submission portal opens
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Full paper Submission portal closes
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Notification of Acceptance of the manuscript
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Final Camera-ready paper submission
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Deadline for Registration
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
              <li className="p-4 border-2 border-slate-800 border-opacity-80 rounded-md font-bold flex flex-col gap-1 items-center lg:flex-row lg:justify-between">
                Conference Dates
                {/*<span className="text-lg font-black">9th March 2023</span>*/}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
