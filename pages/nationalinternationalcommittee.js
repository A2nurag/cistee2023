import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function NationalInternationalCommittee() {
  const [international, setInternational] = useState([]);
  const [national, setNational] = useState([]);
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

    setNational([
      "Prof. S.N. Singh, IIT Kanpur.",
      "Prof. Renu John, IIT Hyderabad.",
      "Prof. Shailendra Jain, SLEIT Longwal.",
      "Prof. A.K. Pradhan, IIT Kharagpur.",
      "Prof. Tripti Jain, IIT Indore",
      "Prof. R. B. Pachori, IIT Indore.",
      "Prof. Tripta Thakur, NPTI, Delhi.",
      "Prof. D.P Kothari, IIT Delhi.",
      "Prof. Kalyan Chatterjee, IIT ISM Dhanbad.",
      "Prof. Gauri Shankar IIT ISM Dhanbad.",
      "Prof. Biplab Bhattacharyya IIT ISM Dhanbad.",
      "Prof. H.M Suryawanshi, VNIT, Nagpur.",
      "Prof. P.S. Kulkarni, VNIT, Nagpur.",
      "Prof. M. V. Aware, VNIT, Nagpur.",
      "Prof. Tapan Kumar Ghoshal, Jadavpur University.",
      "Prof. Debasis Chatterjee, Jadavpur University.",
      "Prof. Ragavan K, IIT Gandhinagar.",
      "Prof. Ranjan Kumar Behara, IIT Patna.",
      "Prof. S Thangavel, NIT Punduchery.",
      "Prof. Soumitra Das, NIT Goa.",
      "Prof. D. M. Vinod Kumar NIT Warangal.",
      "Prof. Ashwani Kumar, NIT Kurukshetra.",
      "Prof. Rohit Bhakar, MNIT Jaipur.",
      "Prof. Harpal Tiwari, MNIT Jaipur.",
      "Prof. N. Subramanyam, NIT Warangal.",
      "Prof. Shelly Vadhera, NIT Kurukshetra.",
      "Dr. Bhavani Shankar T., CPRI, Bengaluru",
      "Prof. R. K. Nema, MANIT Bhopal",
      "Prof. Shailendra Jain, MANIT Bhopal",
      "Prof. Savita Nema, MANIT Bhopal",
      "Prof. Sushma Gupta, MANIT Bhopal",
      "Dr. Pankaj Swarnkar, MANIT Bhopal",
      "Dr. Amit Ojha, MANIT Bhopal",
      "Dr. Rishi K Singh, MANIT Bhopal",
      "Prof. P. Kumbhakar, NIT Durgapur",
      "Prof. N. B. Hui, NIT Durgapur",
      "Prof. K. C. Ghanta, NIT Durgapur",
      "Prof. S. Kar, NIT Durgapur",
      "Prof. S. Roy, NIT Durgapur",
      "Prof. R. Mahapatra, NIT Durgapur",
      "Dr. B. Sen, NIT Durgapur",
    ]);
  }, []);
  return (
    <>
      <Head>
        <title>National And International Committee | CISTEE 2023</title>
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

            <h1 className="text-3xl font-extrabold my-6 uppercase">
              National Advisory / Program Committee of CISTEE 2023
            </h1>
            <p className="divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6">
              {national.map((member, index) => (
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
