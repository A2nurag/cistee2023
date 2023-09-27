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
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase text-slate-900 text-left">
              Call For Papers
            </h1>
            <p className="text-md my-3 font-medium text-orange-700">
              It is planned to publish the peer reviewed and selected papers of
              conference as proceedings with Springer in their prestigious
              <span className="font-bold">
                “Lecture Notes in Electrical Engineering (LNEE)”
              </span>{" "}
              series (
              <a
                className="text-blue-800 underline"
                href="https://www.springer.com/series/7818"
                target="_blank"
                rel="noreferrer"
              >
                https://www.springer.com/series/7818
              </a>
              ).
            </p>
            <p className="text-md my-3 font-medium text-orange-700">
              For detailed instructions for author and editors of conference
              proceedings, kindly visit the following link:{" "}
              <a
                className="text-blue-800 underline"
                href="https://www.springer.com/us/authors-editors/conference-proceedings"
                target="_blank"
                rel="noreferrer"
              >
                https://www.springer.com/us/authors-editors/conference-proceedings.
              </a>
              Select papers from the conference will be published by Springer as
              a proceedings book volume.
            </p>
            <p className="text-md my-3 font-medium text-orange-700">
              Springer will conduct quality checks on the accepted papers and
              only papers that pass these checks will be published. Springer
              Nature does not charge any money for publication of Non-Open
              Access content. Abstracts/extended abstracts and short papers
              (less than 4 pages) are not considered for publication.’
            </p>
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

            <h2 className='my-4 text-2xl font-bold text-slate-800'>
              Tracks of CISTEE2023
            </h2>

            <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
              <p className="text-slate-800 my-2 font-bold text-md">Track-1: Application of AI and Smart Technologies in POWER & ENERGY SYSTEMS, SMART GRIDS, AC-DC MICROGRIDS</p>
              <li className="list-inside pl-6">AI application for Modelling, Control and Optimization of Electrical Power Systems, Automation, Protection and Restructuring, Machine Learning in Power and Energy applications and optimization and control of Power & Energy Systems, and Recent Trends and application in AC/DC Micro Grids, Smart Grids etc.</li>
            </div>

            <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
              <p className="text-slate-800 my-2 font-bold text-md">Track-2: Application of AI and Smart Technologies in POWER ELECTRONIC CONVERTERS, DRIVES AND ELECTRICAL MACHINES</p>
              <li className="list-inside pl-6">Application of modern Techniques in Power Electronics Converters, Electrical Drives, Machines and Energy management, and Energy Storage Technology etc.</li>
            </div>

            <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
              <p className="text-slate-800 my-2 font-bold text-md">Track-3: Application of AI and Smart Technologies in RENEWABLE ENERGY AND ENERGY STORAGE SYSTEMS</p>
              <li className="list-inside pl-6">Applications of smart technologies in Renewable Energy Systems (Solar, wind, Biomass, Hydrogen and other renewable sources), Energy Storage Systems, Electric Vehicles, etc.</li>
            </div>

            <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
              <p className="text-slate-800 my-2 font-bold text-md">Track-4: Application of AI and Smart Technologies in HIGH VOLTAGE AND CONDITION MONITORING</p>
              <li className="list-inside pl-6">Applications of AI and Smart Technologies in High Voltage, Partial Discharge, Insulation and Condition Monitoring.</li>
            </div>

            <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
              <p className="text-slate-800 my-2 font-bold text-md">Track-5: Application of AI and Smart Technologies in BIOMEDICAL, INSTRUMENTATION
                AND CONTROL</p>
              <li className="list-inside pl-6">Applications of AI and Smart Technologies in Biomedical Engineering, Sensors, Instrumentation and Control, etc.</li>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
