import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function keynote() {
  return (
    <>
      <Head>
        <title>Keynote Speaker | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="keynote" />
        <div className="container mx-auto max-w-6xl pt-20">
          <h1 className="text-5xl font-extrabold mb-6 uppercase">
            Keynote Speakers
          </h1>
        </div>
        <section className="py-10 w-full text-slate-800 min-h-max px-2 border-b">
          <div className="container mx-auto max-w-8xl">
            <div className="flex flex-col lg:flex-row gap-5 items-start justify-between">
              <img
                src="https://shared.ontariotechu.ca/shared/faculty/feas/images/faculty-photos/dr.-vijay-sood_1.jpeg"
                className="rounded-md shadow-lg"
              />
              <div>
                <p className="font-bold text-2xl">
                  Prof. Vijay K. Sood, P.Eng., Ph.D., LFIEEE, Emeritus FCAE,
                  FEIC
                </p>
                <p className="my-2">
                  Department of Electrical, Computer and Software Engineering
                  <br />
                  Faculty of Engineering and Applied Science
                  <br />
                  Ontario Tech University
                  <br />
                  2000 Simcoe Street North
                  <br />
                  Oshawa, ON L1H 7K4, CANADA.
                </p>

                <p className="my-2">
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:vijay.sood@ontariotechu.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    vijay.sood@ontariotechu.ca
                  </a>
                </p>
                <p className="my-2">
                  <span className="font-bold">Webpage :</span>{" "}
                  <a
                    href="https://engineering.ontariotechu.ca/people/ecse/vijay.sood.php"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    https://engineering.ontariotechu.ca/people/ecse/vijay.sood.php
                  </a>
                </p>
                <p className="font-bold text-lg my-2">About the Speaker: </p>
                <p className="my-2 text-justify">
                  Vijay Sood (SM&apos;79 - F&apos;06) has received his Ph.D.
                  degree from the University of Bradford, Bradford, U.K., in
                  1977. He is currently the Chair of Department of ECSE, at
                  Ontario Tech University, Ontario, Canada. He has extensive
                  experience in the simulation of HVDC- FACTS systems and their
                  controllers. He has authored two textbooks on HVDC
                  Transmission. His research focuses on the monitoring, control,
                  and protection of power systems and the integration of
                  renewable energy systems into the smart grid. Dr. Sood is a
                  Registered Professional Engineer in the province of Ontario.
                  He is a Life Fellow of the IEEE, Fellow of Engineering
                  Institute of Canada and Emeritus Fellow of the Canadian
                  Academy of Engineering. He is presently the Editor of the
                  Power Series of Books for River Publishers Inc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 w-full text-slate-800 min-h-max px-2 border-b">
          <div className="container mx-auto max-w-8xl">
            <div className="flex flex-col lg:flex-row gap-5 items-start justify-between">
              <img
                src="https://res.cloudinary.com/uiagder/image/upload/c_thumb,g_face,h_339,w_255,z_0.8/v1685717319/mohanlk_profil"
                className="rounded-md shadow-lg"
              />
              <div>
                <p className="font-bold text-2xl">Prof. Mohan Lal Kolhe</p>
                <p className="my-2">
                  Professor (Smart Grid & Renewable Energy),
                  <br />
                  Head of Energy Systems Group,
                  <br />
                  Technical Manager of EU FP7 SEMIAH Project,
                  <br />
                  Faculty of Engineering and Science
                  <br />
                  University of Agder
                  <br />
                  Jon Lilletunusvei 9, NO-4879, Grimstad,
                  <br />
                  NORWAY
                  <br />
                </p>

                <p className="my-2">
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:mohan.l.kolhe@uia.no"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    mohan.l.kolhe@uia.no
                  </a>
                </p>
                <p className="my-2">
                  <span className="font-bold">Webpage :</span>{" "}
                  <a
                    href="https://www.uia.no/kk/profil/mohanlk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    https://www.uia.no/kk/profil/mohanlk
                  </a>
                </p>
                <p className="font-bold text-lg my-2">About the Speaker: </p>
                <p className="my-2 text-justify">
                  Professor Mohan Kolhe is with the University of Agder (Norway)
                  as full professor in electrical power engineering with focus
                  in smart grid and renewable energy in the Faculty of
                  Engineering and Science. He has also received the offer of
                  full professorship in smart grid from the Norwegian University
                  of Science and Technology (NTNU). He has more than twenty-five
                  years&apos; academic experience at international level on
                  electrical and renewable energy systems. He is a leading
                  renewable energy technologist and has previously held academic
                  positions at the world&apos;s prestigious universities e.g.
                  University College London (UK / Australia), University of
                  Dundee (UK); University of Jyvaskyla (Finland); Hydrogen
                  Research Institute, QC (Canada) etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 w-full text-slate-800 min-h-max px-2 border-b">
          <div className="container mx-auto max-w-8xl">
            <div className="flex flex-col lg:flex-row gap-5 items-start justify-between">
              <img src="/sanjeet.png" className="rounded-md shadow-lg" />
              <div>
                <p className="font-bold text-2xl">
                  Prof. Sanjeet Kumar Dwivedi
                </p>
                <p className="my-2">
                  Fellow IET UK, Ph.D. IIT Delhi,
                  <br />
                  M.Sc. Engineering Innovation and Business Denmark
                  <br />
                  M.E. IIT Roorkee (Gold Medal),
                  <br />
                  Executive Leadership Education MIT Boston
                  <br />
                  Danfoss Power Electronics, Graasten, Denmark
                </p>

                <p className="my-2">
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:contact@sanjeetkumardwivedi.dk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    contact@sanjeetkumardwivedi.dk
                  </a>
                </p>
                <p className="my-2">
                  <span className="font-bold">Webpage :</span>{" "}
                  <a
                    href="https://www.sanjeet-dwivedi.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    https://www.sanjeet-dwivedi.com/
                  </a>
                </p>
                <p className="font-bold text-lg my-2">About the Speaker: </p>
                <p className="my-2 text-justify">
                  Dr. Sanjeet Kumar Dwivedi is Fellow of IET (UK) & working as
                  Senior Research Leader at Danfoss, Denmark since 2008. Prior
                  to this, Dr. Sanjeet was an electrical engineer in Larsen and
                  Toubro, an infrastructure company in India (1991-92),
                  Electrical Engineer in CPWD, Government of India (GoI). He
                  worked as senior faculty member of the Department of Technical
                  Education, MP, India (1993-2006) and Dean R&D, Government
                  Engineering College SAGAR MP India(2006-2008).
                </p>
                <p className="my-2 text-justify">
                  Dr Sanjeet has awarded with two master degrees, first one from
                  IIT Roorkee, ME (Gold Medal) in Power Apparatus and Drives and
                  second one from South Denmark University, M.Sc. Engineering in
                  Innovation and Business. He has completed his Ph.D. degree in
                  Green Technologies from IIT Delhi India. Dr. Sanjeet also
                  completed his executive leadership education from MIT Boston.
                </p>
                <p className="my-2 text-justify">
                  He was honored with adjunct professor at Curtin University,
                  Perth, Australia (2016-18). Dr Sanjeet is Member of Faculty
                  board of South Denmark University in the Innovation and
                  Business department. Dr. Sanjeet has authored more than 40
                  technical papers and holds 11 international patents, three
                  business trade and three books engineering research books
                  published from Academic Press (UK) and IET Press (UK). He is
                  an advisory board member of of International Journal of Power
                  Electronics (IJPE), Associate Editor of the IEEE Transaction
                  on Industrial Electronics (IEEE TIE). He has given invited
                  presentations, organized and chaired special sessions in
                  several IEEE and European Power Electronics conferences around
                  the globe. Previously he worked as Technical Editor of
                  IEEE/ASME transaction on Mechatronics, Associate Editor of IET
                  (United Kingdom) Power Electronics Journal, Associate Editor
                  of Korean Journal of Power Electronics (JPE).
                </p>
                <p className="my-2 text-justify">
                  He is a recipient of Merit Award from Institution of India
                  IE(I) (2006) for his research publication on permanent magnet
                  machines. He was also awarded with 9th Man on the Moon Global
                  Innovation Award from the CEO and President of Danfoss (2015)
                  and another prestigious recognition as winner of IETE-Bimal
                  Bose Award (2017) for outstanding contribution in power
                  electronics and drive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 w-full text-slate-800 min-h-max px-2">
          <div className="container mx-auto max-w-8xl">
            <div className="flex flex-col lg:flex-row gap-5 items-start justify-between">
              <img src="/akhtar.png" className="rounded-md shadow-lg" />
              <div>
                <p className="font-bold text-2xl">Prof. Akhtar Kalam</p>
                <p className="my-2">
                  Head of External Engagement <br />
                  Leader - Smart Energy Research Unit College of Engineering and
                  Science (D524 or D332) Victoria University <br />
                  Ballarat Road <br />
                  Footscray 3011 <br />
                  Victoria, Australia
                </p>

                <p className="my-2">
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:akhtar.kalam@vu.edu.au"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    akhtar.kalam@vu.edu.au
                  </a>
                </p>
                <p className="my-2">
                  <span className="font-bold">Webpage :</span>{" "}
                  <a
                    href=" https://www.vu.edu.au/research/akhtar-kalam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 underline"
                  >
                    {" "}
                    https://www.vu.edu.au/research/akhtar-kalam
                  </a>
                </p>
                <p className="font-bold text-lg my-2">About the Speaker: </p>
                <p className="my-2 text-justify">
                  Professor Akhtar Kalam has been at Victoria University (VU),
                  Melbourne since 1984 and a former Deputy Dean of the Faculty
                  of Health, Engineering and Science and Head of Engineering of
                  the College of Engineering and Science. He is currently the
                  Head of External Engagement at the College of Engineering and
                  Science, VU. He is the current Chair of the Academic Board in
                  the Engineering Institute of Technology, Perth and Texila
                  College Australia, Melbourne. Again, he is the Editor in Chief
                  of Australian Journal of Electrical & Electronics Engineering.
                  Also, he has Distinguished Professorship position at various
                  national and international universities
                </p>
                <p className="my-2 text-justify">
                  He delivers lectures, work on industrial projects and examine
                  external thesis. His major areas of interests are power system
                  analysis, communication, control, protection; renewable
                  energy; smart grid; IEC61850 implementation and cogeneration
                  systems. He teaches Energy Systems to undergraduates,
                  postgraduates and provides professional courses to the
                  industry.
                </p>
                <p className="my-2 text-justify">
                  He offers CPD courses on Power System Protection, Renewable
                  Energy, IEC61850 and Cogeneration & Gas Turbine Operation to
                  practicing engineers. Professor Kalam is a Fellow of EA, IET,
                  AIE, a life Senior Member of IEEE, NER, APEC Engineer, IntPE
                  (Aus) and a member of CIGRE AP B5 Study Committee.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
