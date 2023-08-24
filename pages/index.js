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

        <section className="bg-zinc-200 py-20 w-full text-slate-800 px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h3 className="text-3xl lg:text-4xl font-extrabold font-[Fira Sans] mb-6">
              CONFERENCE PROCEEDINGS
            </h3>
            <div className="p-8 rounded-md border border-slate-800 flex gap-5 items-center">
              <img src="/7818.jpg" className="h-48" />
              <div>
                <p className="my-2">
                  All full paper submissions will be blind reviewed on the basis
                  of technical quality, relevance to conference topics of
                  interest, originality, significance, and presentation.
                  Accepted papers will be published into the Lecture Notes in
                  Electrical Engineering (Electronic ISSN: 1876-1119) as a
                  proceedings book volume. Springer will conduct quality checks
                  on the accepted papers and only papers that pass these checks
                  will be published. Indexed by Ei Compendex, Web of science,
                  Scopus, SCImago, DBLP etc..
                </p>
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="196"
                 height="52.5"
                 viewBox="0 0 112 30"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M23.651 23.02H4.27v-1.191h1.643c.287-3.86 3.982-5.297 6.036-8.417H9.568c-1.15.411-2.875 2.956-2.875 4.434H3.696l.041-1.232-.986.821-2.628-3.038S0 14.233 0 14.11c0-.123.041-.206.041-.206l4.147-5.625.739-2.217 1.109-.41 1.15-1.601-.411-2.794c1.108-.411 2.176-.041 2.71.492A14.315 14.315 0 009.444.025c1.971-.205 2.668.862 2.997 2.053a13.98 13.98 0 011.478.206.669.669 0 01.616-.452c.369 0 .616.287.616.616v.164c.863.287 1.684.698 2.423 1.15a.585.585 0 01.492-.247c.37 0 .616.287.616.616 0 .164-.041.287-.123.37.698.575 1.273 1.273 1.807 2.012a.76.76 0 01.287-.082c.369 0 .657.287.657.616 0 .247-.123.452-.328.534.411.739.739 1.56.985 2.422.041-.041.123-.041.164-.041.369 0 .616.287.616.616s-.205.575-.451.616c.164.862.287 1.725.369 2.628.369 0 .657.287.657.616 0 .369-.287.615-.616.657 0 .862-.041 1.807-.123 2.71a.664.664 0 01.575.657c0 .329-.287.616-.657.616h-.041c-.164.903-.328 1.806-.534 2.751h1.725v1.191zm-2.957-1.15c2.382-9.814-.411-17.615-8.007-18.519.041.411.041.739.041 1.068 0 .493-.041.903-.041.903l-1.19-.206c.041-.411.123-3.203-.863-3.818 0 0 0 1.478-.328 2.956L9.198 4.05c0-1.027-.452-1.437-1.067-1.725l.287 2.012-.699 1.027.329.944-2.176.739-.616 1.766-3.819 5.256 1.438 1.724 1.601-1.355.369.246v2.012h.862c.37-1.437 1.56-3.121 2.669-3.942l-.616-.739.903-.78.862 1.068s3.08 0 3.08-.041c.452-.985.739-2.176.739-3.572h1.191c0 4.681-2.34 6.529-5.256 9.403-1.068 1.067-2.012 2.217-2.135 3.777h13.55zM3.573 12.796c.041.534-.041 1.355-.329 1.766l-.862-.329c.287-.41.452-.985.452-1.478l.739.041zm4.721-4.558l-1.847.985-.124-1.519 1.93-.206.041.74z"
                      fill="#00285A"
                      fillRule="nonzero"
                    />
                    <path
                      fill="#EE7D11"
                      d="M23.651 29.097H4.27v-2.382h19.381z"
                    />
                    <path
                      d="M36.179 23.348c-1.56 0-2.792-.37-3.983-.903-.246-1.068-.329-2.505-.411-3.983l.945-.164c.534 2.012 1.273 3.983 3.736 3.983 1.725 0 2.751-1.068 2.751-2.669 0-4.229-7.021-3.284-7.021-8.171 0-2.217 1.807-4.229 5.01-4.229 1.068 0 2.217.287 3.367.698.082.862.164 1.848.205 3.573l-.862.041c-.411-1.438-1.067-3.203-3.162-3.203-1.56 0-2.341 1.068-2.341 2.341 0 3.901 7.145 3.08 7.145 8.171 0 2.421-2.177 4.515-5.379 4.515zm11.702-.164c-.657-.041-1.191-.164-1.519-.287v3.859c0 1.396.164 1.52 2.053 1.684v.78h-5.789v-.78c1.478-.164 1.601-.287 1.601-1.684V15.793c0-1.437-.041-1.478-1.437-1.601v-.698c1.232-.246 2.381-.616 3.572-1.027v1.56l2.217-1.15c.287-.164.575-.205.862-.205 2.546 0 3.983 2.217 3.983 4.352 0 3.45-2.463 5.79-5.543 6.16zm.534-8.993c-.657 0-1.519.452-2.053.78v6.077c.452.493 1.191.862 2.094.862 1.191 0 2.751-.903 2.751-3.982 0-2.587-1.232-3.737-2.792-3.737zm12.81 1.027c-.246-.329-.575-.411-.985-.411-.534 0-1.191.616-1.643 1.889v3.819c0 1.396.164 1.52 1.93 1.643v.821h-5.584v-.821c1.396-.123 1.561-.247 1.561-1.643v-4.64c0-1.396-.123-1.396-1.396-1.643v-.698c1.232-.247 2.423-.493 3.49-.903v2.464h.041c.739-1.355 1.766-2.422 2.71-2.422.822 0 1.396.616 1.396 1.273 0 .943-.985 1.765-1.52 1.272zm7.844 7.761h-5.256v-.821c1.396-.123 1.601-.247 1.601-1.724v-4.435c0-1.601-.123-1.601-1.478-1.766v-.698c1.273-.247 2.545-.534 3.572-.903v7.802c0 1.478.123 1.601 1.561 1.724v.821zm-2.711-12.524c-.78 0-1.396-.616-1.396-1.396 0-.821.616-1.437 1.396-1.437.822 0 1.437.616 1.437 1.437 0 .78-.615 1.396-1.437 1.396zm15.275 12.524h-4.845v-.821c1.15-.123 1.314-.247 1.314-1.561v-4.024c0-1.478-.657-2.382-1.889-2.382-.78 0-1.684.575-2.3 1.15v5.256c0 1.314.124 1.438 1.273 1.561v.821h-5.01v-.821c1.396-.123 1.601-.247 1.601-1.561v-4.722c0-1.396-.082-1.478-1.314-1.643v-.698c1.232-.247 2.382-.493 3.449-.903v1.643c.534-.452 2.094-1.601 3.285-1.601 1.848 0 2.997 1.273 2.997 3.162v4.763c0 1.314.206 1.438 1.438 1.561v.82h.001zm11.702-9.773c-.164.369-.616 1.068-.985 1.273l-1.191-.123c.329.452.575 1.355.575 2.053 0 2.505-2.258 3.86-4.311 3.86-.123 0-.452-.041-.739-.041-.493.164-.903.739-.903 1.108 0 .37.37.822 1.355.822H89.6c1.437 0 3.367.698 3.367 2.997 0 2.628-2.751 4.845-5.954 4.845-2.792 0-4.271-1.724-4.271-3.121 0-.903.452-1.601 2.382-3.08-.698-.246-1.93-.944-1.848-2.258.945-.41 1.807-1.15 2.176-1.601-1.108-.37-2.135-1.684-2.135-3.161 0-2.669 2.382-4.106 4.352-4.106a5.1 5.1 0 012.382.575c1.068-.041 2.135-.164 3.121-.287l.163.245zm-3.243 11.005c-.575-.206-1.355-.247-2.628-.247-1.766 0-2.546 1.314-2.546 2.3 0 1.396 1.232 2.464 3.08 2.464 2.053 0 3.203-1.355 3.203-2.71-.001-.863-.494-1.561-1.109-1.807zm-2.628-10.553c-.862 0-1.848.903-1.848 2.628s.903 2.957 2.135 2.957c.903 0 1.766-.78 1.766-2.669 0-1.602-.781-2.916-2.053-2.916zm14.494 3.613c-.369.041-3.203.246-5.789.329.082 2.71 1.683 3.859 3.285 3.859.903 0 1.56-.246 2.381-1.067l.534.739c-1.355 1.683-2.957 2.094-3.696 2.094-2.915 0-4.599-2.217-4.599-4.845 0-3.203 2.423-5.708 4.845-5.708 2.012 0 3.613 1.725 3.613 3.655.001.615-.123.862-.574.944zm-3.49-3.572c-.944 0-1.93 1.027-2.176 2.792l3.531-.082c.452 0 .534-.123.534-.534-.001-1.109-.78-2.176-1.889-2.176zm11.825 1.519a1.402 1.402 0 00-.985-.411c-.534 0-1.232.616-1.683 1.889v3.819c0 1.396.164 1.52 1.929 1.643v.821h-5.625v-.821c1.437-.123 1.56-.247 1.56-1.643v-4.64c0-1.396-.082-1.396-1.396-1.643v-.698c1.314-.247 2.464-.493 3.531-.903v2.464h.041c.698-1.355 1.724-2.422 2.71-2.422.78 0 1.396.616 1.396 1.273 0 .943-1.026 1.765-1.478 1.272z"
                      fill="#00285A"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-300 py-20 w-full text-slate-800 px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h3 className="text-3xl lg:text-4xl font-extrabold font-[Fira Sans] mb-6">
              ABOUT CISTEE
            </h3>
            <p>
              International Conference on “Computational Intelligence and Smart
              Technologies in Electrical Engineering (CISTEE 2023) is being
              organized by Department of Electrical Engineering, National
              Institute of Technology Durgapur, during December 16-17, 2023, in
              collaboration with and Maulana Azad National Institute of
              Technology (MANIT) Bhopal, MP India.
            </p>

            <p className="mt-3">
              In the context of present COVID situation, the conference will be
              organized in hybrid mode. The objective of the conference is to
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
              Grid Interconnection, Electric Vehicles, Energy Storage, Battery
              Charging techniques, FACTS devices, High Voltage, Power Quality,
              Power System and its application to power and energy, artificial
              intelligence and other computational techniques, etc.
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
              The transformation from &apos;Regional&apos; to
              &apos;National&apos; and from “college” to “Institute” demanded
              dedicated efforts from its staff and faculty members. The
              Institute has Fourteen departments, and Four research centres. The
              institute offers eight UG programme, with a total annual intake
              around 900 including Indian and foreign students. The institute
              also offers eighteen M. Tech. programmes, five M.Sc. programmes,
              one MBA programme, one MSW programmes and Ph.D. programmes by all
              departments in various fields of Science, Technology and
              Engineering. In addition, a good number of foreign students also
              study here. Faculty in the various Departments have active
              collaborations with universities and elite institutions within and
              outside India.
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
