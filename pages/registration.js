import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function Registration() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <main className={inter.className}>
        <Navbar pageName="registration" />

        <section className="bg-blue-200 py-20 w-full text-slate-800 min-h-max">
          <div className="container mx-auto max-w-5xl text-justify">
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
                present the paper in person at the Conference. Registration fee,
                which includes the conference registration kit, proceedings in
                USB, participation in all the sessions of the conference, lunch
                and inter-session refreshments and gala dinner is as follows.
                IEEE members will get discount of Rs. 1000 for Indian delegates
                and 20 USD for Foreign delegates in all cases.
              </p>

              {/* <img
              src='/registration table.png'
              className='my-2 w-full md:ml-6 '
            /> */}
              <p className="my-2 md:ml-6">
                Please note that the fees shown above are inclusive of all taxes
                and levies. Any gateway charges along with applicable taxes or
                levies, if any, will have to be borne by the registrant.
              </p>
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
                <span className="font-semibold text-orange-600">CATCON 22</span>
                &#39; followed by the paper ID in &#39;
                <span className="font-semibold text-orange-600">
                  Purpose/ Remarks
                </span>
                &#39; during NEFT. &lt;&#39;CATCON 22&gt; space &lt;Mention your
                Paper ID…&gt;.
              </p>
              <p className="my-2 md:ml-6">
                <span className="font-semibold">Step 3:</span> <br />
                After transaction, kindly send the transaction receipt to the
                following mail Id with a subject line “Transaction Receipt for
                Paper ID &lt;Your Paper ID&gt;.”
                <br />
                <a
                  href="mailto:registration@catcon2022.com"
                  className="font-semibold text-blue-800 hover:underline"
                >
                  registration@catcon2022.com
                </a>
              </p>
              <p className="my-2 md:ml-6">
                <span className="font-semibold">Step 4:</span> <br />
                Then fill up the{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScdKleVBqO4b-Rr6CUYxCstQXd4ITSX_KhzDqDaZH4740Y7Og/viewform"
                  className="font-semibold text-blue-800 hover:underline"
                >
                  Registration Form
                </a>
              </p>
            </div>
            {/*  Bank Details of IEEE CATCON 2022 */}
            <div className="my-6">
              <h2 className="my-2 text-2xl font-bold text-slate-700">
                Bank Details of IEEE CATCON 2022
              </h2>

              <table className="table-fixed border md:ml-6">
                <tbody>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 pr-16 font-bold bg-blue-100">
                      Name of Account
                    </td>
                    <td className="border-2 border-zinc-700 p-2 pr-16 bg-blue-100">
                      IEEE CATCON 2022
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      Account Number
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      110066836238
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      Name of Bank
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      Canara Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      Branch Name
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      NIT Durgapur
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      Bank Address
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      M. G. Avenue, Durgapur-713209, West Bengal, India
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold ">
                      IFSC Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      CNRB0008569
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold bg-blue-100">
                      MICR Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2 bg-blue-100">
                      713015203
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-zinc-700 p-2 font-bold">
                      SWIFT Code
                    </td>
                    <td className="border-2 border-zinc-700 p-2">
                      CNRBINBBBFD
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="bg-[#55D6BE] py-20 w-full text-slate-800 min-h-max">
          <div className="container mx-auto max-w-5xl text-justify">
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
                1. The page limit for each accepted paper is 5 pages. If needed,
                up to TWO (02) additional pages can be added (apart from basic 5
                pages) by paying an extra charge (Indian Delegates: INR 1180 /
                Foreign Delegates: $ 15) per additional page at the time of
                author registration payment to make the final version of the
                paper.
              </p>

              <p className="mt-2 md:ml-6">
                2. At least one of the authors of every accepted paper must
                register for the conference as author and present the paper in
                order for it to be included in the conference proceedings of
                IEEE CATCON 2022, and subsequent submission to IEEE Xplore®
                digital library.
              </p>

              <p className="mt-2 md:ml-6">
                3. Each author registration covers one accepted paper.
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
                6. Non-refundable registration fee must be paid prior to
                uploading the final IEEE formatted, Camera-ready version of the
                paper and e-copyright form.
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
                1. All participants need to be registered to attend the IEEE
                CATCON 2022 by paying the requisite registration fees.
              </p>
              <p className="mt-2 md:ml-6">
                2. IEEE members are requested to upload IEEE membership details
                during the online registration process, if registering under
                IEEE category.
              </p>
              <p className="mt-2 md:ml-6">
                3. Students are requested to upload valid student ID card (front
                and back side) during the online registration process, if
                registering under that student category.
              </p>
              <p className="mt-2 md:ml-6">
                4. Please keep a copy/receipt of the transaction ID, generated
                by the payment gateway as well as by your bank. You may need
                these later if you need to track your payment/registration.
              </p>
              <p className="mt-2 md:ml-6">
                5. All correspondence regarding registration for IEEE CATCON
                2022 should contain Paper ID as well as registration
                confirmation number.
              </p>
              <p className="mt-2 md:ml-6">
                6. The Organizer of IEEE CATCON 2022, or the Organizing
                Institute (NIT Durgapur), will not be responsible for any loss,
                financial or otherwise, caused by improper transactions
                conducted online. While organizers have taken all reasonable
                precautions to ensure a safe online transaction, it is the
                registrant’s responsibility, while paying the registration fee,
                to secure their user IDs, passwords, Paper ID, etc.
              </p>
            </div>
            <div className="my-6">
              <h3 className="my-2 text-2xl font-bold text-slate-700">
                No Show Policy:
              </h3>

              <p className="mt-2 md:ml-6">
                Any accepted paper included in the final program is expected to
                have at least one author attend and present the paper at the
                conference. Non-presented paper will not be submitted to IEEE
                Xplore® digital library as per IEEE no-show policy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
