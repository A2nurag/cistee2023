import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function paperSubmission() {
  return (
    <>
      <Head>
        <title>Paper Submission | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="paperSubmission" />

        <section className="py-20 w-full text-slate-800 min-h-screen font-medium px-2">
          <div className="container mx-auto max-w-8xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase text-slate-900">
              Paper Submission
            </h1>
            <p className="my-1">For Paper submission, Click here</p>
            <a
              type="button"
              href="https://cmt3.research.microsoft.com/CATCON2022/Submission/Index"
              target="_blank"
              rel="noreferrer"
              className="my-3 inline-block rounded-lg bg-indigo-600 py-3 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500  focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:bg-slate-400"
            >
              Submit Paper
            </a>
            <p className="my-1">
              All papers must be original and not simultaneously submitted to
              another journal or conference. The following steps and guidelines
              should be followed for the submission of paper:
            </p>
            <h4 className="my-2 mt-6 text-lg font-bold text-slate-900">
              Step 1: Paper Submission through CMT
            </h4>
            <ul className="flex list-outside list-disc flex-col gap-2">
              <li className="my-2 ml-6">
                For the full papers submission please follow the CMT link as:
                <br />
                <a
                  href="https://cmt3.research.microsoft.com/CISTEE2023/Submission/Index"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ellipsis font-medium text-blue-800 hover:underline"
                >
                  https://cmt3.research.microsoft.com/CISTEE2023/Submission/Index
                </a>
              </li>

              <li className="my-2 ml-6">
                The paper must be in Springer format. For Templates, please
                visit conference page (www.cistee.com)
              </li>
              <li className="my-2 ml-6">
                The full-length paper should not exceed{" "}
                <span className="font-bold">Ten (10)</span> pages.
              </li>
            </ul>
            <h4 className="my-2 mt-6 text-lg font-bold text-slate-900">
              Step 2: Final Camera-ready paper preparation and submission
              through CMT
            </h4>
            <ul className="flex  list-outside list-disc flex-col gap-2">
              <li className="my-2 ml-6">
                Please follow <span className="italic">Springer</span> format
                for preparing your final manuscript. Paper must not contain 1st,
                2nd, Dr., Mr., Prof. etc. in the author’s name. Also, no author
                biography at the end.
              </li>
              <li className="my-2 ml-6">
                Authors are requested to submit both PDF and WORD file of
                camera-ready paper during camera-ready paper submission.
              </li>
              <li className="my-2 ml-6">
                Revised Version: Paper must be revised based on reviewers’
                comments/suggestions. The reviewer’s comments are notified
                thorough email.
              </li>
              <li className="my-2 ml-6">
                The authors are expected to make sure that the comments of the
                reviewers/meta-reviewers have been addressed in the final
                manuscript.
              </li>
              <li className="my-2 ml-6">
                Please prepare a <b>pdf/doc</b> file with your response to the
                reviewer comments (if any). It should clearly tell in which
                parts of your manuscript (page no., column no. and line no. from
                top or bottom) you have performed your corrections.
              </li>
              <li className="my-2 ml-6">
                The maximum page limit is <b>Ten (10)</b> pages including
                references.
              </li>
              <li className="my-2 ml-6">
                Similarity with other papers should be lower than 10% (a
                similarity index below 10% excluding references is acceptable
                for publication). Maximum File Size allowed is 10 MB and the
                file format is <b>.pdf/.doc</b> without any encryption and/or
                passwords.
              </li>
              <li className="my-2 ml-6">
                Please thoroughly proofread your manuscript to avoid any
                grammatical/spelling mistakes.
              </li>
              <li className="my-2 ml-6">
                Please change the file name of the camera-ready paper to PIDxx
                (where xx is your <b>CMT</b> paper ID) before submission to{" "}
                <b>CMT</b>.
              </li>
              <li className="my-2 ml-6">
                Rename the file containing your response to reviewer comments as
                Response_xx (where xx is your <b>CMT</b> paper ID)
              </li>
            </ul>
            <p className="my-2">
              The copyright form will be shared after the camera-ready paper
              submission
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
