import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function callForPapers() {
  return (
    <>
      <Head>
        <title>Call for Papers | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="callForPapers" />

        <section className="py-20 w-full text-slate-800 min-h-max px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase text-slate-900 text-left">
              Call For Papers
            </h1>
            <p className="text-md my-3 font-medium text-zinc-700">
              The CISTEE-2023 invites all authors to submit research papers in
              the topics pertaining to the scope of the conference will include,
              but are not limited to:
            </p>

            <ul className="flex-col gap-4 list-disc list-inside font-medium">
              <li className="my-4">
                Power Systems Automation, Protection and Restructuring
              </li>
              <li className="my-4">
                Advanced Techniques in Power Systems and Electrical Drives
              </li>
              <li className="my-4">
                Recent Trends and application in Power Systems and Smart Grids
              </li>
              <li className="my-4">
                Modelling, Control and Optimization of Electrical Systems
              </li>
              <li className="my-4">
                Application of Advance Techniques in Power & Energy Systems
              </li>
              <li className="my-4">
                Renewable Energy and Energy Storage Systems
              </li>
              <li className="my-4">
                Planning of Generation, Transmission & Distribution System
              </li>
              <li className="my-4">Control Systems Applications</li>
              <li className="my-4">High Voltage Engineering Applications</li>
              <li className="my-4">Distributed Generations</li>
              <li className="my-4">Electric Vehicles</li>
              <li className="my-4">Power Converters</li>
              <li className="my-4">
                Machine Learning in Power & Energy Applications
              </li>
              <li className="my-4">
                Artificial Intelligence Techniques in Power & Energy
                Applications
              </li>
              <li className="my-4">
                Internet of Things in Power, Energy and High Voltage Engineering
              </li>
              <li className="my-4">Any other relevant topics.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
