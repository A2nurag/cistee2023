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
                                        CISTEE 2023
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-2 border-zinc-700 p-2 font-bold">
                                        Account Number
                                    </td>
                                    <td className="border-2 border-zinc-700 p-2"></td>
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
                </section>
            </main>
        </>
    )
}
