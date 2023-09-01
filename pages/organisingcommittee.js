import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function OrganisingCommittee() {
  return (
    <>
      <Head>
        <title>Organising Committee | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Navbar pageName="committee" />
        <section className="py-20 w-full text-slate-800 min-h-screen px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase tracking-wide">
              Organising Committee
            </h1>
            {/* Patron */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">Patron(s):</h2>
            <p className="py-1 pl-6">
              Prof. Arvind Choubey, Director, NIT Durgapur.
            </p>
            <p className="py-1 pl-6">
              Dr. Karunesh Kumar Shukla, Director, MANIT Bhopal.
            </p>

            {/* Co Patron */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Co Patron(s):
            </h2>
            <p className="py-1 pl-6">
              Prof. M. L. Kolhe, University of Agder, Norway.
            </p>
            <p className="py-1 pl-6">
              Prof. S. N. Singh, Director, ABV IIITM Gwalior.
            </p>

            {/* Honorary Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Honorary Chair(s):
            </h2>
            <p className="py-1 pl-6">
              Prof. Akhtar Kalam, Victoriya University, Australia.
            </p>
            <p className="py-1 pl-6">
              Prof. Koki Ogura, Kyushu Sangyo University, Japan.
            </p>
            <p className="py-1 pl-6">
              Prof. Vijay K. Sood, Ontario Tech University, Canada.
            </p>
            <p className="py-1 pl-6">
              Prof. Sanjeet Dwivedi, Danfoss Power Electronics A/S, Denmark.
            </p>

            {/* Honorary Co Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Honorary Co Chair(s):
            </h2>
            <p className="py-1 pl-6">
              Prof. Sanjeevikumar, University of South-Eastern Norway, Norway.
            </p>
            <p className="py-1 pl-6">
              Prof. Aimie Nazmin Bin Azmi, UniversitiTeknikal Malaysia,
              Malaysia.
            </p>
            <p className="py-1 pl-6">
              Prof. Akira Nishimura, Mie University, Japan.
            </p>
            <p className="py-1 pl-6">
              Prof. Amitava Roy, University of Portsmouth, UK.
            </p>

            {/* General Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              General Chair(s):
            </h2>
            <p className="py-1 pl-6">Prof. Nirmal Kumar Roy, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. Manisha Dubey, MANIT Bhopal.</p>
            <p className="py-1 pl-6">
              Prof. S. N. Mahato, Head, Department of Electrical Engineering,
              NIT Durgapur
            </p>
            <p className="py-1 pl-6">
              Prof. N. P. Patidar, Head, Department of Electrical Engineering,
              MANIT Bhopal
            </p>

            {/* Conference Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Conference Chair(s):
            </h2>
            <p className="py-1 pl-6">Prof. S. S. Thakur, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. T. Mandal, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. S. N. Mahato, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. C. Koley, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. N. P. Patidar, MANIT Bhopal.</p>

            {/* Technical Programme Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Technical Programme Chair(s):
            </h2>
            <p className="py-1 pl-6">Prof. Subrata Banerjee, NIT Durgapur</p>
            <p className="py-1 pl-6">Prof. Parimal Acharjee, NIT Durgapur</p>
            <p className="py-1 pl-6">Prof. Tapas K. Saha, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Jayati Dey, NIT Durgapur</p>
            <p className="py-1 pl-6">Mr. Jitesh C. Barman, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. B. Sen, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Yogendra Kumar, MANIT Bhopal</p>
            <p className="py-1 pl-6">Dr. S. C. Gupta, MANIT Bhopal</p>
            <p className="py-1 pl-6">Dr. Anoop Arya, MANIT Bhopal</p>

            {/* Conference Organizing Secretaries */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Conference Organizing Secretaries:
            </h2>
            <p className="py-1 pl-6">
              Dr. Partha Sarathee Bhowmik, NIT Durgapur
            </p>
            <p className="py-1 pl-6">Dr. Aashish Kumar Bohre, NIT Durgapur</p>
            <p className="py-1 pl-6">
              Dr. Mukesh Kumar Kirar, MANIT Bhopal, India
            </p>

            {/* Program Secretaries */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Program Secretaries:
            </h2>
            <p className="py-1 pl-6">Dr. Manika Saha, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Omkar Yadav, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Soumya Chatterjee, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Santanu Paul, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Rajdip Dey, NIT Durgapur.</p>

            {/* Organizing Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Organizing Chair:
            </h2>
            <p className="py-1 pl-6">
              Dr. Aniruddha Bhattacharya, NIT Durgapur.
            </p>
            <p className="py-1 pl-6">Dr. Irfan Ahmed, NIT Durgapur,</p>
            <p className="py-1 pl-6">Dr. Tushar Kanti Bera, NIT Durgapur.</p>
            <p className="py-1 pl-6">Dr. Biman Kumar Saha Roy, NIT Durgapur.</p>
            <p className="py-1 pl-6">Dr. Suman Halder, NIT Durgapur,</p>
            <p className="py-1 pl-6">Dr. Aritro Dey, NIT Durgapur.</p>

            {/* Finance Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Finance Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Suman Halder, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Rajdip Dey, NIT Durgapur.</p>

            {/* Publication Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Publication Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Irfan Ahmed, NIT Durgapur,</p>
            <p className="py-1 pl-6">Dr. Aritro Dey, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Soumya Chatterjee, NIT Durgapur</p>

            {/* Publicity Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Publicity Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Supriya Sarkar, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Biman Kumar Saha Roy, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Manika Saha, NIT Durgapur</p>

            {/* Registration Chair */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Registration Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Santanu Paul, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Omkar Yadav, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Ashish K. Dhara, NIT Durgapur</p>

            {/* Website Design & Development Committee */}
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Website Design & Development Committee:
            </h2>
            <p className="py-1 pl-6">Dr. Partha S. Bhowmik, NIT Durgapur</p>
            <p className="py-1 pl-6">Anurag Sarkar, NIT Durgapur</p>
          </div>
        </section>
      </main>
    </>
  );
}
