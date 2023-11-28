import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function Registration() {
  return (
    <>
      <Head>
        <title>Registration | CISTEE 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Navbar pageName="registration" />
        <section className="pt-20 w-full text-slate-800 min-h-max font-medium px-2">
          <div className="container mx-auto max-w-6xl text-justify">
            <h1 className="text-5xl font-extrabold mb-6 uppercase">
              Registration
            </h1>
            {/* Registration fee */}
            <div className="my-6">
              <h2 className="my-2 text-2xl font-bold text-slate-700">
                Registration Fee:
              </h2>
              <p className="my-3 md:ml-6">
                One of the authors of each paper must have full registration and
                present the paper in person at the Conference. Please note that
                the fees as shown below are inclusive of all taxes and levies.
                Any gateway charges along with applicable taxes or levies, if
                any, will have to be borne by the registrant.
              </p>

              <img
                src="/reg%20fee.png"
                className="my-4 w-[100%] mx-auto lg:w-[80%]"
                alt="Registration fees"
              />
            </div>
            {/* Steps for Registration: */}
            <div className="my-6">
              <h2 className="my-2 text-2xl font-bold text-slate-700">
                Steps for Registration:
              </h2>
              <p className="my-2 md:ml-6">
                <span className="font-semibold">Step 1:</span> <br />
                <span className="font-semibold text-orange-600">
                  Indian Delegates/Participants:
                </span>{" "}
                Do only <span className="font-semibold">NEFT mode</span> (for{" "}
                <span className="font-semibold">Indian Delegates</span>) of
                transaction in the following Bank Account.
                <br />
                <span className="font-semibold text-orange-600">
                  Foreign Delegates/Participants:
                </span>{" "}
                Do <span className="font-semibold">bank/wire transfer</span>{" "}
                using the given details.
              </p>
              <p className="my-2 md:ml-6">
                <span className="font-semibold">Step 2:</span> <br />
                Mention &#39;
                <span className="font-semibold text-orange-600">
                  CISTEE 2023
                </span>
                &#39; followed by the paper ID in &#39;
                <span className="font-semibold text-orange-600">
                  Purpose/ Remarks
                </span>
                &#39; during NEFT. &lt;&#39;CISTEE 23&gt; space &lt;Mention your
                Paper ID…&gt;.
              </p>
              <p className="my-2 md:ml-6">
                <span className="font-semibold">Step 3:</span> <br />
                After transaction, kindly send the transaction receipt to the
                following mail Id with a subject line “Transaction Receipt for
                Paper ID &lt;Your Paper ID&gt;.”
                <br />
                <a
                  href="mailto:cistee2023@gmail.com"
                  className="font-semibold text-blue-800 hover:underline"
                >
                  cistee2023@gmail.com
                </a>
              </p>
            </div>
            <div className="my-6">
              <h2 className="my-2 text-2xl font-bold text-slate-700">
                Bank Details of CISTEE 2023
              </h2>

              <table className="table-fixed border md:ml-6">
                <tbody>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 pr-16 font-bold bg-blue-100">
                      Name of Account
                    </td>
                    <td className="border-2 border-zinc-700 p-2 pr-16 bg-blue-100">
                      CEP NIT Durgapur
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      Account Number
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      37850318679
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      Name of Bank
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      State Bank of India
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      Branch Name
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      R.E College (Durgapur)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      Bank Address
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      SBI, RE College, M. G. Avenue, Durgapur-713209, West
                      Bengal, India
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold ">
                      IFSC Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      SBIN0002108
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      CIF Number
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      81244040204
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      MICR Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      713002204
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      SWIFT Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2">SBININBB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="py-5 w-full text-slate-800 min-h-max px-2">
          <div className="container mx-auto max-w-6xl text-justify">
            <h2 className="text-5xl font-extrabold mb-6 uppercase">
              REGISTRATION POLICIES
            </h2>
            <div className="my-6">
              <h3 className="my-2 text-2xl font-bold text-slate-700">
                The registration fees include the
              </h3>
              <ul className="list-inside list-disc md:ml-6">
                <li>Publication charges.</li>
                <li>Conference kit.</li>
                <li>Access/admission to tutorials &amp; technical sessions.</li>
                <li>Lunch on all conference days.</li>
                <li>Morning and evening refreshments.</li>
                <li>Banquet dinner.</li>
                <li>Cultural events (if any) as part of the conference.</li>
              </ul>
            </div>
            <div className="my-6">
              <h2 className="my-2 text-2xl font-bold text-slate-700">
                For Authors:
              </h2>

              <p className="mt-2 md:ml-6">
                1. The page limit for each accepted paper is 12 pages. If
                needed, up to TWO (03) additional pages can be added (apart from
                basic 12 pages) by paying an extra charge (Indian Delegates: INR
                500 / Foreign Delegates: $ 15) per additional page at the time
                of author registration payment to make the final version of the
                paper.
              </p>

              <p className="mt-2 md:ml-6">
                2. At least one of the authors of every accepted paper must
                register for the conference as author and present the paper in
                order for it to be included in the conference proceedings of
                CISTEE 2023.
              </p>

              <p className="mt-2 md:ml-6">
                3. Each author registration covers up to one accepted paper.
              </p>

              <p className="mt-2 md:ml-6">
                4. If more than one author of an accepted paper wishes to attend
                the conference, all such authors need to be registered
                separately by paying applicable registration fee.
              </p>

              <p className="mt-2 md:ml-6">
                5. Additional authors (other than those who are included in the
                manuscript submitted for review) cannot be added to the
                camera-ready paper.
              </p>

              <p className="mt-2 md:ml-6">
                6. <b>Non-refundable registration fee</b> must be paid prior to
                uploading Camera-ready version of the paper and copyright form.
              </p>

              <p className="mt-2 md:ml-6">
                7. No accepted paper is included in the proceedings without the
                payment of the required registration fee.
              </p>

              <p className="mt-2 md:ml-6">
                8. No accepted paper is included in the proceedings without
                being presented at the conference.
              </p>

              <p className="mt-2 md:ml-6">
                9. At least one of the authors of every accepted paper must
                register for the conference as author and present the paper in
                order to get presentation certificate.
              </p>
            </div>
            <div className="my-6">
              <h3 className="my-2 text-2xl font-bold text-slate-700">
                For all conference attendees:
              </h3>

              <p className="mt-2 md:ml-6">
                1. All participants need to be registered to participate in the
                CISTEE 2023 by paying the requisite registration fees.
              </p>

              <p className="mt-2 md:ml-6">
                2. Students (UG, PG, Research scholars) are requested to upload
                valid student ID card (front and back side) during the online
                registration process, if{" "}
                <b>registering under the student category</b>.
              </p>
              <p className="mt-2 md:ml-6">
                3. Please keep a copy/receipt of the transaction ID, generated
                by the payment gateway as well as by your bank. You may need
                these later if you need to track your payment/registration.
              </p>
              <p className="mt-2 md:ml-6">
                4. All correspondence regarding registration for CISTEE 2023
                should contain Paper ID as well as registration confirmation
                number.
              </p>
              <p className="mt-2 md:ml-6">
                5. The Organizer of CISTEE 20223, or the Organizing Institute
                (NIT Durgapur), will not be responsible for any loss, financial
                or otherwise, caused by improper transactions conducted online.
                While organizers have taken all reasonable precautions to ensure
                a safe online transaction, it is the registrant&apos;s
                responsibility, while paying the registration fee, to secure
                their user IDs, passwords, Paper ID, etc.
              </p>
            </div>
            <div className="my-6">
              <h3 className="my-2 text-2xl font-bold text-slate-700">
                No Show Policy:
              </h3>

              <p className="mt-2 md:ml-6">
                Any accepted paper included in the final program is expected to
                have at least one author attend and present the paper at the
                conference. Non-presented paper will not be submitted to
                Springer as per Springer no-show policy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
