import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function manitbhopal() {
    return (
        <>
            <Head>
                <title>Abotu MANIT Bhopal | CISTEE 2023</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={inter.className}>
                <Navbar pageName='manitbhopal' />

                <section className='py-20 w-full text-slate-800 min-h-max px-2'>
                    <div className='container mx-auto max-w-8xl'>
                        <h1 className='text-5xl font-extrabold mb-6 uppercase'>
                            About MANIT Bhopal
                        </h1>
                        <p>
                            Maulana Azad National Institute of Technology (MANIT) Bhopal is an Institute of
                            National Importance, formerly known as Maulana Azad College of Technology (MACT),
                            is one among the first eight Regional Engineering Colleges of country. The institute is
                            named after the great scholar, educationist and first education minister of Govt. of India,
                            Maulana Abul Kalam Azad. The institute is elevated to the status of National Institutes
                            of Technology in year 2002. As is an Institute of National Importance, the MANIT is
                            successfully meeting the objective of producing skilled technocrats of high quality and
                            at present running 9 UG and 32 PG programs. The institute is also running the doctoral
                            programs in all modern disciplines.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
