import Head from "next/head";
import { Public_Sans } from "@next/font/google";
import Navbar from "../components/navbar";
import { Check, FileText, Upload } from "react-feather";
import { useState } from "react";

const inter = Public_Sans({
  weight: "variable",
  subsets: ["latin"],
});

export default function paperSubmission() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <div
          id="close"
          className="absolute w-screen h-screen bg-black bg-opacity-70 grid place-items-center backdrop-blur-lg"
          onClick={(e) => {
            if (e.target.id === "close") setModal(false);
          }}
        >
          <div className="bg-white p-24 rounded-2xl">
            <div>
              <p className="text-center text-xl font-bold mb-4">
                Download Template
              </p>
              <a
                className="font-medium px-12 py-5 inline-block bg-red-300 uppercase text-center rounded-l-2xl border border-zinc-700"
                href="/LaTeX template.zip"
              >
                Latex
                <br />
                Template
              </a>
              <a
                className="font-medium px-12 py-5 inline-block bg-blue-200 uppercase text-center rounded-r-2xl border border-zinc-700"
                href="/Word template.doc"
              >
                Word
                <br />
                Template
              </a>
            </div>
          </div>
        </div>
      )}
      <Head>
        <title>Paper Submission | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="paperSubmission" />

        <section className="py-20 w-full text-slate-800 min-h-screen font-medium px-4">
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase text-slate-900">
              Paper Submission
            </h1>
            <div className="flex justify-center">
              <a
                type="button"
                href="https://cmt3.research.microsoft.com/CISTEE2023/Submission/Index"
                target="_blank"
                rel="noreferrer"
                className="flex bg-blue-300 px-7 py-4 rounded-l-lg font-bold gap-2 border border-zinc-700"
              >
                <Upload />
                Submit Paper
              </a>

              <button
                className="flex bg-amber-50 px-7 py-4 font-bold gap-2 border border-zinc-700"
                onClick={() => {
                  setModal(true);
                }}
              >
                <FileText />
                Template (Latex/ Word)
              </button>

              <a
                type="button"
                href="/Author-Template-Springer.docx"
                target="_blank"
                rel="noreferrer"
                className="flex bg-blue-300 px-7 py-4 rounded-r-lg font-bold gap-2 border border-zinc-700"
              >
                <Check />
                Springer Guidelines for Authors
              </a>
            </div>
            <p className="mt-5">
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
                <span className="font-bold">Twelve (12)</span> pages.
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
                The maximum page limit is <b>Twelve (12)</b> pages including
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
