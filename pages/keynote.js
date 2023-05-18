import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function keynote() {
    return (
        <>
            <Head>
                <title>Keynote Speaker | CISTEE 2023</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={inter.className}>
                <Navbar pageName='keynote' />

                <section className='py-20 w-full text-slate-800 min-h-max px-2'>
                    <div className='container mx-auto max-w-8xl'>
                        <h1 className='text-5xl font-extrabold mb-6 uppercase'>
                            Keynote Speakers
                        </h1>
                        <div>
                            <li className="text-lg my-3 ml-4 list-inside">
                                <a href='https://www.uia.no/kk/profil/mohanlk' target='_blank' rel='noreferrer' className='font-bold'>Prof. M. L. Kolhe</a>, University of Agder, Norway.
                            </li>

                            <li className="text-lg my-3 ml-4 list-inside">
                                <a href='https://www.vu.edu.au/research/akhtar-kalam' target='_blank' rel='noreferrer' className='font-bold'>Prof. Akhtar Kalam</a>, Victoriya University, Australia.
                            </li>

                            <li className="text-lg my-3 ml-4 list-inside">
                                <a href='https://engineering.ontariotechu.ca/people/ecse/vijay.sood.php' target='_blank' rel='noreferrer' className='font-bold'>Prof. V. K. Sood</a>, University of Ontario, Canada.
                            </li>

                            <li className="text-lg my-3 ml-4 list-inside">
                                <a href='https://www.sanjeet-dwivedi.com/' target='_blank' rel='noreferrer' className='font-bold'>Prof. Sanjeet Dwivedi</a>, Danfoss Power Electronics A/S, Denmark.
                            </li>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
