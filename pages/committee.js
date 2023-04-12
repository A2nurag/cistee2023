import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function committee() {
  return (
    <>
      <Head>
        <title>Committee | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="committee" />

        <section className="py-20 w-full text-slate-800 min-h-screen">
          <div className="container mx-auto max-w-5xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase">
              Committee
            </h1>
            <p>Coming Soon!</p>
          </div>
        </section>
      </main>
    </>
  );
}
