import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function TrackChairs() {
  return (
    <>
      <Head>
        <title>Track Chairs | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="committee" />

        <section className="py-20 w-full text-slate-800 min-h-screen px-2">
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase tracking-wide">
              Track Chairs
            </h1>

            {/* Track Chairs */}
            <div>
              <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
                <p className="text-slate-800 my-2 font-bold text-md">
                  Track Chair (Track 1):
                </p>
                <p className="pl-6">
                  <strong>Dr. Partha S. Bhowmik, Dr. Manika Saha</strong>
                  <br />
                  (Application of AI and Smart Technologies in Power & Energy
                  Systems, Smart Grids, AC-DC Microgrids)
                </p>
              </div>

              <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
                <p className="text-slate-800 my-2 font-bold text-md">
                  Track Chair (Track 2):
                </p>
                <p className="pl-6">
                  <strong>Dr. Irfan Ahmed, Dr. Rajdip Dey</strong>
                  <br />
                  (Application of AI and Smart Technologies in Power Electronic
                  Converters, Drives and Electrical Machines)
                </p>
              </div>

              <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
                <p className="text-slate-800 my-2 font-bold text-md">
                  Track Chair (Track 3):
                </p>
                <p className="pl-6">
                  <strong>
                    Dr. Aniruddh Bhattacharya, Dr. Aashish K. Bohre, Dr. Omkar
                    Yadav
                  </strong>
                  <br />
                  (Application of AI and Smart Technologies in Renewable Energy
                  and Energy Storage Systems)
                </p>
              </div>

              <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
                <p className="text-slate-800 my-2 font-bold text-md">
                  Track Chair (Track 4):
                </p>
                <p className="pl-6">
                  <strong>Dr. Soumya Chatterjee, Dr. Santanu Paul</strong>
                  <br />
                  (Application of AI and Smart Technologies in High Voltage and
                  Condition Monitoring)
                </p>
              </div>

              <div className="py-2 px-4 border border-slate-700 rounded-md my-2">
                <p className="text-slate-800 my-2 font-bold text-md">
                  Track Chair (Track 5):
                </p>
                <p className="pl-6">
                  <strong>
                    Dr. Suman Halder, Dr. Tushar K. Bera, Dr. Aritro Dey
                  </strong>
                  <br />
                  (Application of AI and Smart Technologies in Biomedical,
                  Instrumentation and Control)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
