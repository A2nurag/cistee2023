import Head from "next/head";
import Navbar from "../components/navbar";
import { Public_Sans } from "@next/font/google";

const inter = Public_Sans({ weight: "variable", subsets: ["latin"] });

export default function Journalspecialissues() {
  return (
    <>
      <Head>
        <title>Journal Special Issues | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="journalspecialissues" />
        <section className="py-20 w-full text-slate-800 min-h-screen font-medium px-4">
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase text-slate-900">
              Journal Special Issues
            </h1>
            <p className="mt-5">
              Extended version of high quality/best papers presented in Springer
              CISTEE 2023 conference will be recommended for possible
              publication and further submission and peer review process in the
              following journals:
            </p>

            <ol className="mt-5 list-disc list-inside">
              <li>
                <span className="font-bold text-lg text-red-600">
                  AIMS Energy Journal:- special issues (E-SCI Indexed), ISSN
                  2333-8334
                </span>
                <ul className="ml-5 list-inside">
                  <li className="my-3">
                    Special Issue: Computational Intelligence and Smart
                    Technologies for Sustainable Electrical Energy Systems
                    <br />
                    <a
                      href="https://www.aimspress.com/aimse/article/6599/special-articles"
                      target="_blank"
                      rel="norefferrer"
                      className="text-blue-800"
                    >
                      https://www.aimspress.com/aimse/article/6599/special-articles
                    </a>
                  </li>

                  <li className="my-3">
                    Special Issue: Sustainable E-Mobility
                    <br />
                    <a
                      href="https://www.aimspress.com/aimse/article/6369/special-articles"
                      target="_blank"
                      rel="norefferrer"
                      className="text-blue-800"
                    >
                      https://www.aimspress.com/aimse/article/6369/special-articles
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-bold text-lg text-red-600">
                  International Journal of Power Electronics and Drive Systems (
                  scopus indexed ), p-ISSN: 2088-8694, e-ISSN 2722-256X
                </span>
                <br />
                <a
                  href="https://ijpeds.iaescore.com/index.php/IJPEDS"
                  target="_blank"
                  rel="norefferrer"
                  className="text-blue-800 ml-5"
                >
                  https://ijpeds.iaescore.com/index.php/IJPEDS
                </a>
              </li>
            </ol>
            <p className="mt-5">
              For submitting extended versions of recommended papers, the
              authors will have to follow respective journals' guidelines, terms
              & conditions and other criteria as per their policy.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
