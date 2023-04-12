import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function program() {
  return (
    <>
      <Head>
        <Head>
          <title>Venue | CISTEE 2023</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <main className={inter.className}>
        <Navbar pageName="program" />

        <section className="py-20 w-full text-slate-800 min-h-screen">
          <div className="container mx-auto max-w-5xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase">Venue</h1>
            <div className="mb-5 pl-4">
              <p>
                <span className="my-2 font-bold">
                  Inaugural / Valedictory Program:
                </span>{" "}
                Fourier Auditorium, New Academic Building
              </p>
              <p>
                <span className="my-2 font-bold">
                  Key Note / Technical Session:
                </span>{" "}
                Seminar Room, S. N. Roy Memorial Building
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
