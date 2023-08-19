import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function Committee() {
  const [international, setInternational] = useState([]);
  const [national, setNational] = useState([]);
  useEffect(() => {
    setInternational([
      "Prof. M. L. Kolhe, University of Agder, Norway.",
      "Prof. Akhtar Kalam, Victoriya University, Australia.",
      "Prof. V. K. Sood, University of Ontario, Canada.",
      "Dr. Anurag K. Srivastava, West Virginia University, USA.",
      "Prof. Sanjeet Dwivedi, Danfoss Power Electronics A/S, Denmark.",
      "Prof. Manucher Solemani, University of Bath, UK.",
      "Prof. Koki Ogura, Kyushu Sangyo University, Japan.",
      "Dr. Aimie Nazmin Bin Azmi, Universiti Teknikal Malaysia, Malaysia.",
      "Prof. Akira Nishimura, Mie University, Japan.",
      "Prof. Amitava Roy, University of Portsmouth, UK.",
      "Prof. P. Sanjeev Kumar, Denmark.",
      "Prof. Biplab Sikdar, Singapore.",
      "Prof. Akshay Kumar Saha, South Africa.",
      "Dr. Baseem Khan , Hawassa University, Ethiopia.",
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
        <title>Committee | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="committee" />

        <section className="py-20 w-full text-slate-800 min-h-screen px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase tracking-wide">
              Committee
            </h1>

            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Patron(s):
            </h2>
            <p className="py-1 pl-6">Director, NIT Durgapur.</p>
            <p className="py-1 pl-6">Director, MANIT Bhopal.</p>

            {/*  */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Co Patron(s):
            </h2>
            <p className="py-1 pl-6">
              Prof. M. L. Kolhe, University of Agder, Norway.
            </p>
            <p className="py-1 pl-6">
              Prof. S. N. Singh, Director, ABV IIITM Gwalior.
            </p>

            {/*  */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
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

            {/*  */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
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

            {/*  */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              General Chair:
            </h2>
            <p className="py-1 pl-6">Prof. Nirmal Kumar Roy, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. Manisha Dubey, MANIT Bhopal.</p>

            {/* General Co-Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              General Co-Chair:
            </h2>
            <p className="py-1 pl-6">
              Prof. S. N. Mahato, Head, Department of Electrical Engineering,
              NIT Durgapur
            </p>
            <p className="py-1 pl-6">
              Prof. N. P. Patidar, Head, Department of Electrical Engineering,
              MANIT Bhopal
            </p>

            {/* Conference Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Conference Chair:
            </h2>
            <p className="py-1 pl-6">Prof. S. S. Thakur, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. T. Mandal, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. S. N. Mahato, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. C. Koley, NIT Durgapur.</p>
            <p className="py-1 pl-6">Prof. N. P. Patidar, MANIT Bhopal.</p>

            {/* Technical Programme Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Technical Programme Chair:
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

            {/* More sections... */}

            {/* Organizing Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
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

            {/* More sections... */}

            {/* Publication Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Publication Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Irfan Ahmed, NIT Durgapur,</p>
            <p className="py-1 pl-6">Dr. Aritro Dey, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Soumya Chatterjee, NIT Durgapur</p>

            {/* Publicity Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Publicity Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Supriya Sarkar, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Biman Kumar Saha Roy, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Manika Saha, NIT Durgapur</p>

            {/* Registration Chair */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Registration Chair:
            </h2>
            <p className="py-1 pl-6">Dr. Santanu Paul, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Omkar Yadav, NIT Durgapur</p>
            <p className="py-1 pl-6">Dr. Ashish K. Dhara, NIT Durgapur</p>

            {/* Website Design & Development Committee */}
            <h2 className="mt-2 text-lg font-bold text-purple-800">
              Website Design & Development Committee:
            </h2>
            <p className="py-1 pl-6">Dr. Partha S. Bhowmik, NIT Durgapur</p>
            <p className="py-1 pl-6">Anurag Sarkar, NIT Durgapur</p>

            {/*  */}
            <h2 className="my-2 text-2xl font-bold text-slate-800 uppercase">
              International Advisory / Program Committee of CISTEE 2023
            </h2>
            <p className="divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6">
              {international.map((member, index) => (
                <p className="py-1" key={index}>
                  {member}
                </p>
              ))}
            </p>

            <h2 className="my-2 text-2xl font-bold text-slate-800 uppercase">
              National Advisory / Program Committee of CISTEE 2023
            </h2>
            <p className="divide-y-2 divide-zinc-100 text-justify md:divide-y-0 md:pl-6">
              {national.map((member, index) => (
                <p className="py-1" key={index}>
                  {member}
                </p>
              ))}
            </p>

            {/* Track Chairs */}
            <div>
              <h1 className="text-4xl mt-6 font-extrabold mb-2 uppercase tracking-wide">
                Track Chairs
              </h1>
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
