import Head from 'next/head'
import Navbar from '../components/navbar'
import { Inter } from '@next/font/google'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </Head>
      <main className={inter.className}>
        <header className='w-screen h-screen bg-[url("../public/image.jpg")] bg-cover bg-center flex flex-col justify-between'>
          <Navbar pageName='home' />
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
            }}
            className='flex items-center justify-between w-full max-w-[1800px] mx-auto pb-10'
          >
            <div>
              <h1 className='text-9xl text-white text-opacity-80 font-[900]'>
                CISTEE 2023
              </h1>
              <p className='text-xl text-white text-opacity-60 font-bold uppercase'>
                Computational Intelligence and Smart Technologies in Electrical
                Engineering
              </p>
            </div>
            <img
              src='/nitd logo white.png'
              className='max-h-36 opacity-80'
            ></img>
          </div>
        </header>

        <section className='bg-[#59C3C3] py-20 w-full text-slate-800'>
          <div className='container mx-auto max-w-5xl text-justify'>
            <h3 className='text-5xl font-extrabold font-[Fira Sans] mb-6'>
              ABOUT CISTEE
            </h3>
            <p className='text-lg'>
              2022 IEEE 6th International Conference on Condition Assessment
              Techniques in Electrical Systems (IEEE CATCON 2022) is organized
              by National Institute of Technology Durgapur, technically
              co-sponsored by IEEE Dielectrics and Electrical Insulation Society
              (DEIS) Kolkata Chapter, and financially co-sponsored by IEEE
              Kolkata Section. It will be held during December 17-19, 2022 at
              National Institute of Technology Durgapur.
            </p>

            <p className='mt-3 text-lg'>
              This conference is being organized for the sixth time, which is in
              line with the present day requirements in the global scenario of
              various condition assessment techniques for a variety of
              electrical systems. Its goal is to provide a broad coverage and
              dissemination of fundamental research in condition monitoring and
              assessment among researchers, academics, industry and
              practitioners. Around 200 delegates are expected to attend and
              will be one of the biggest gatherings in this field of research.
              The technical program of IEEE CATCON 2022 will consist of
              tutorials, invited talks, posters and oral presentations. Research
              papers describing original work on theories, methodologies,
              abstractions, algorithms, industry applications and case studies
              are invited.
            </p>
          </div>
        </section>

        <section className='bg-[#D81E5B] py-20 w-full text-slate-200'>
          <div className='container mx-auto max-w-5xl'>
            <h3 className='text-5xl font-extrabold font-[Fira Sans] mb-6'>
              NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR
            </h3>
            <p className='text-justify text-lg'>
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
            <p className='mt-3 text-lg'>
              The city of Durgapur is recognized as one of the fastest
              developing Tier–II cities in the national scenarios. Durgapur is
              situated at a distance of about 180 KMs from Kolkata. It is
              located right on the major railway and expressway (NH-2)
              connecting Kolkata to Delhi and Durgapur can be reached from
              Kolkata (and vice versa) in ~ 2 hrs. 30 minutes.
            </p>
            <p className='mt-3 text-lg'>
              NIT Durgapur is the first institute in Eastern India to be
              selected as a Lead Institute under the Technical Education Quality
              Improvement Program (TEQIP) of the Govt. of India funded by the
              World Bank.In 2007, the institute received a final feather to its
              cap when the Union Government of India declared it as an
              “Institute of National Importance”.
            </p>
            <p className='mt-3 text-lg'>
              The college received a major recognition in 2003 when it was
              elevated to National Institute of Technology (N.I.T.) as a “deemed
              university” with a fully - funded premier technological
              institution administered by an autonomous Board of Governors under
              the Ministry of Human Resource Development, Government of India.
              The transformation from ‘Regional’ to ‘National’ and from
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
            <p className='mt-3 text-lg'>
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

        <section className='bg-[#5DA9E9] py-20 w-full text-slate-800'>
          <div className='container mx-auto max-w-5xl'>
            <h3 className='text-5xl font-extrabold font-[Fira Sans] mb-6'>
              DEPARTMENT OF ELECTRICAL ENGINEERING, NITD
            </h3>
            <p className='text-justify text-lg'>
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
            <p className='mt-3 text-lg'>
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
  )
}
