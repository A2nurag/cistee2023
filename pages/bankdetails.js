import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function bankdetails() {
    return (
        <>
            <Head>
                <title>Bank Details | CISTEE 2023</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={inter.className}>
                <Navbar pageName='bankdetails' />

                <section className='py-20 w-full text-slate-800 min-h-max px-2'>
                    <div className='container mx-auto max-w-8xl'>
                        <h1 className='text-5xl font-extrabold mb-6 uppercase'>
                            Bank Details
                        </h1>
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
                </section>
            </main>
        </>
    )
}
