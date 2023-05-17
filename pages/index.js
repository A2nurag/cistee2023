import Head from "next/head";
import Navbar from "../components/navbar";
import { Inter } from "@next/font/google";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <header className='w-screen h-screen bg-[url("../public/image.jpg")] bg-cover bg-center flex flex-col justify-between'>
          <Navbar pageName="home" />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1800px] mx-auto pb-10 text-center gap-2 px-2">
              <div>
                <h1 className="text-5xl lg:text-9xl text-center lg:text-left text-white font-[900]">
                  CISTEE 2023
                </h1>
                <p className="text-sm lg:text-xl text-white text-opacity-80 lg:text-left">
                  Computational Intelligence and Smart Technologies in
                  Electrical Engineering
                </p>
                <marquee
                  className="text-sm lg:text-xl text-white text-opacity-80 font-bold mb-1 mt-2"
                  scrolldelay="1"
                >
                  All CISTEE 2023 presented papers will be published in
                  conference proceedings by Springer LNEE Series
                </marquee>
              </div>
              <img
                src="/nitd logo white.png"
                className="max-h-20 lg:max-h-36 opacity-80 hidden lg:block"
              />
            </div>
          </div>
        </header>

        <section className="bg-green-300 py-20 w-full text-slate-800 px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h3 className="text-3xl lg:text-4xl font-extrabold font-[Fira Sans] mb-6">
              ABOUT CISTEE
            </h3>
            <p>
              International Conference on “Computational Intelligence and Smart Technologies in
              Electrical Engineering (CISTEE 2023) is being organized by Department of Electrical
              Engineering, National Institute of Technology Durgapur, during December 16-17, 2023,
              in collaboration with and Maulana Azad National Institute of Technology (MANIT)
              Bhopal, MP India.
            </p>

            <p className="mt-3">
              In the context of present COVID situation, the conference will be
              organized in Online mode. The objective of the conference is to
              offer a platform for electrical engineers and researchers to
              present their research work and to share experiences and ideas in
              the area of power energy and control related engineering
              applications incorporating smart technologies and intelligence
              techniques. The conference program will be having plenary sessions
              and technical paper presentations. Distinguished speakers will be
              invited to deliver keynote speeches on emerging and smart
              technologies in power, energy and control techniques in electrical
              engineering. The applications and impact of Electrical Power,
              Smart and Advanced Technology, Control Techniques and
              Computational Intelligence has changed worldwide in electrical
              engineering during last few decades. Therefore, CISTEE-2023 aims
              to provide a platform for bringing together teachers, researchers,
              professionals, managers and policy makers to develop and discuss
              the recent advancement in the field of Electrical Power, Modern
              Technology, Control, and Intelligence. This also intended to
              discuss recent advances in various use of associated fields of
              optimization, modelling, simulation, expert systems, artificial
              intelligence etc. Focus areas of the conference are Smart Grid
              Technology, Renewable Energy Sources, Distributed Generation and
              Grid Interconnection, Electric Vehicles, Energy Storage, 
              Battery Charging techniques, FACTS devices, High Voltage, Power
              Quality, Power System and its application to power and energy,
              artificial intelligence and other computational techniques, etc.
            </p>
          </div>
        </section>

        <section className="bg-purple-800 py-20 w-full text-slate-200 px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h3 className="text-3xl lg:text-4xl font-extrabold font-[Fira Sans] mb-6">
              NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR
            </h3>
            <p>
              National Institute of Technology Durgapur (NITD) is a leading
              technical institute offering undergraduate, postgraduate and
              doctoral programmes in various disciplines of engineering,
              technology, science, social science and management. NITD was
              established as a Regional Engineering College (REC) in 1960 as a
              joint venture of the Government of India and Government of West
              Bengal. REC Durgapur was converted to NIT Durgapur under the full
              administrative and financial control of the Ministry of Human
              Resource Development of Government of India with a Deemed
              University status on 3rd July, 2003. Subsequently NITD has been
              given the status of a University by the UGC Act. The Institute was
              declared an Institute of National Importance by the Government of
              India on August 15, 2007.
            </p>
            <p className="mt-3">
              The city of Durgapur is recognized as one of the fastest
              developing Tier - II cities in the national scenarios. Durgapur is
              situated at a distance of about 180 KMs from Kolkata. It is
              located right on the major railway and expressway (NH-2)
              connecting Kolkata to Delhi and Durgapur can be reached from
              Kolkata (and vice versa) in ~ 2 hrs. 30 minutes.
            </p>
            <p className="mt-3">
              NIT Durgapur is the first institute in Eastern India to be
              selected as a Lead Institute under the Technical Education Quality
              Improvement Program (TEQIP) of the Govt. of India funded by the
              World Bank.In 2007, the institute received a final feather to its
              cap when the Union Government of India declared it as an
              “Institute of National Importance”.
            </p>
            <p className="mt-3">
              The college received a major recognition in 2003 when it was
              elevated to National Institute of Technology (N.I.T.) as a “deemed
              university” with a fully - funded premier technological
              institution administered by an autonomous Board of Governors under
              the Ministry of Human Resource Development, Government of India.
              The transformation from 'Regional' to 'National' and from
              “college” to “Institute” demanded dedicated efforts from its staff
              and faculty members. The Institute has Fourteen departments, and
              Four research centres. The institute offers eight UG programme,
              with a total annual intake around 900 including Indian and foreign
              students. The institute also offers eighteen M. Tech. programmes,
              five M.Sc. programmes, one MBA programme, one MSW programmes and
              Ph.D. programmes by all departments in various fields of Science,
              Technology and Engineering. In addition, a good number of foreign
              students also study here. Faculty in the various Departments have
              active collaborations with universities and elite institutions
              within and outside India.
            </p>
            <p className="mt-3">
              The institute strongly encourages its students to carry out their
              internship in industries and academia all over the world for which
              they receive financial support from the institute. Financial
              support is also given to students to participate in conferences
              and present research papers in India and abroad. In addition,
              numerous scholarships are offered to students with poor financial
              background. In the past few years, UG students of the institute
              have done their internship in some of the most reputed institute /
              industries of India and abroad including IISE Bangalore, IITs,
              CERN (Switzerland), NUS (Singapore), MIT (USA), University of
              Michigan (USA), Max Planck Institute (Germany), ETH Zurich
              (Switzerland) to name a few. Each year the number of UG students
              doing internship abroad is rapidly increasing
            </p>
          </div>
        </section>

        <section className="bg-zinc-200 py-20 w-full text-slate-800 px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h3 className="text-3xl lg:text-4xl font-extrabold font-[Fira Sans] mb-6">
              DEPARTMENT OF ELECTRICAL ENGINEERING, NITD
            </h3>
            <p className="text-justify">
              The Electrical Engineering department was established in the year
              of 1960. Presently the department offer B. Tech in Electrical
              Engineering, with intake capacity of 100 students, M. Tech in
              Power Systems and Power Electronics & Machine Drives, each have
              intake 20 students, and PhD program. The students from different
              states of India and also from different countries are presently
              studying in the department. The department has 17nos. qualified
              and highly motivated faculty members with various specializations,
              is equipped with around 15 different laboratories, and among these
              8 laboratories has modern state of the art facilities for research
              and consultancy work. The department also has strong regional and
              foreign collaboration.
            </p>
            <p className="mt-3">
              The department has established a good track record in teaching and
              research among the regional institutes, through consistent effort
              of faculty & staff members, students and administration, and
              continuous up gradation of syllabus, with the input from various
              stake holders. Since inception the department is continuously
              contributing novel and innovative ideas in Electrical Engineering
              to keep pace with the latest technological developments. The
              department adapted modern state of the art teaching methodology,
              various online courses and pedagogy courses are presently being
              developed with the fund from NMEICT. Faculty members and a total
              25 number of research scholars are deeply engaged with research
              activities in diverse emerging areas. In credit, departments own
              number of patents, sponsored projects, books and journal
              publication with reputed publishers. The department also has
              strong collaboration with various universities at national and
              international level. The department regularly organizes invited
              lectures, seminars, conferences & short-term courses by experts
              from academia & industries in various fields of Electrical
              Engineering.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
