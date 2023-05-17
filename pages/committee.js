import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function committee() {

  const [international, setInternational] = useState([]);
  const [national, setNational] = useState([]);
  useEffect(() => {
    setInternational([
      'Prof. M. L. Kolhe, University of Agder, Norway.',
      'Prof. Akhtar Kalam, Victoriya University, Australia.',
      'Prof. V. K. Sood, University of Ontario, Canada.',
      'Dr. Anurag K. Srivastava, West Virginia University, USA.',
      'Prof. Sanjeet Dwivedi, Danfoss Power Electronics A/S, Denmark.',
      'Prof. Manucher Solemani, University of Bath, UK.',
      'Prof. Koki Ogura, Kyushu Sangyo University, Japan.',
      'Dr. Aimie Nazmin Bin Azmi, Universiti Teknikal Malaysia, Malaysia.',
      'Prof. Akira Nishimura, Mie University, Japan.',
      'Prof. Amitava Roy, University of Portsmouth, UK.',
      'Prof. P. Sanjeev Kumar, Denmark.',
      'Prof. Biplab Sikdar, Singapore.',
      'Prof. Akshay Kumar Saha, South Africa.',
    ])

    setNational([
      'Prof. S.N. Singh, IIT Kanpur.',
      'Prof. Renu John, IIT Hyderabad.',
      'Prof. Shailendra Jain, SLEIT Longwal.',
      'Prof. A.K. Pradhan, IIT Kharagpur.',
      'Prof. Tripti Jain, IIT Indore',
      'Prof. R. B. Pachori, IIT Indore.',
      'Prof. Tripta Thakur, NPTI, Delhi.',
      'Prof. D.P Kothari, IIT Delhi.',
      'Prof. Kalyan Chatterjee, IIT ISM Dhanbad.',
      'Prof. Gauri Shankar IIT ISM Dhanbad.',
      'Prof. Biplab Bhattacharyya IIT ISM Dhanbad.',
      'Prof. H.M Suryawanshi, VNIT, Nagpur.',
      'Prof. P.S. Kulkarni, VNIT, Nagpur.',
      'Prof. M. V. Aware, VNIT, Nagpur.',
      'Prof. Tapan Kumar Ghoshal, Jadavpur University.',
      'Prof. Debasis Chatterjee, Jadavpur University.',
      'Prof. Ragavan K, IIT Gandhinagar.',
      'Prof. Ranjan Kumar Behara, IIT Patna.',
      'Prof. S Thangavel, NIT Punduchery.',
      'Prof. Soumitra Das, NIT Goa.',
      'Prof. D. M. Vinod Kumar NIT Warangal.',
      'Prof. Ashwani Kumar, NIT Kurukshetra.',
      'Prof. Rohit Bhakar, MNIT Jaipur.',
      'Prof. Harpal Tiwari, MNIT Jaipur.',
      'Prof. N. Subramanyam, NIT Warangal.',
      'Prof. Shelly Vadhera, NIT Kurukshetra.',
    ])
  }, []);


  return (
    <>
      <Head>
        <title>Committee | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="committee" />

        <section className="py-20 w-full text-slate-800 min-h-screen px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase">
              Committee
            </h1>
            <h2 className='my-2 text-xl font-bold text-slate-800'>
              International Advisory / Program Committee of CISTEE 2023
            </h2>
            <p className='divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6'>
              {international.map((member, index) => (
                <p className='py-1' key={index}>{member}</p>
              ))}
            </p>

            <h2 className='my-2 text-xl font-bold text-slate-800'>
              National Advisory/ Program Committee of CISTEE 2023
            </h2>
            <p className='divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6'>
              {national.map((member, index) => (
                <p className='py-1' key={index}>{member}</p>
              ))}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
