import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function NationalInternationalCommittee() {
  const [international, setInternational] = useState([]);
  useEffect(() => {
    setInternational([
      "Prof.  M. L. Kolhe, University of Agder, Norway.",
      "Prof.  Akhtar Kalam, Victoriya University, Australia.",
      "Prof.  V. K. Sood, University of Ontario, Canada.",
      "Dr.  Anurag K. Srivastava, West Virginia University, USA.",
      "Prof. Sanjeet Dwivedi, Danfoss Power Electronics A/S, Denmark.",
      "Prof.  Manucher Solemani, University of Bath, UK.",
      "Prof.  Koki Ogura, Kyushu Sangyo University, Japan.",
      "Dr. Aimie Nazmin Bin Azmi, Universiti Teknikal Malaysia, Malaysia.",
      "Prof.  Akira Nishimura, Mie University, Japan.",
      "Prof.  Amitava Roy, University of Portsmouth, UK.",
      "Prof. P. Sanjeev Kumar, University of South-Eastern, Norway.",
      "Prof.  Biplab Sikdar, National University of Singapore, Singapore.",
      "Prof. Akshay Kumar Saha, University of KwaZulu-Natal, South Africa.",
      "Dr. Baseem Khan, Hawassa University,",
    ]);
  }, []);
  return (
    <>
      <Head>
        <title>International Advisory Committee | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="committee" />
        <section className="py-20 w-full text-slate-800 min-h-screen px-2">
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-3xl font-extrabold mb-6 uppercase">
              International Advisory / Program Committee of CISTEE 2023
            </h1>
            <p className="divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6">
              {international.map((member, index) => (
                <p className="py-1" key={index}>
                  {member}
                </p>
              ))}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
