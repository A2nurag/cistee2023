import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function brochure() {
    return (
        <>
            <Head>
                <title>Brochure | CISTEE 2023</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={inter.className}>
                <Navbar pageName='brochure' />

                <section className='py-20 w-full text-slate-800 min-h-max px-2'>
                    <div className='container mx-auto max-w-8xl'>
                        <h1 className='text-5xl font-extrabold mb-6 uppercase'>
                            Brochure
                        </h1>
                        
                        <a href='/CISTEE 2023-01-09-2023.pdf' target='_blank' rel='noreferrer' className='inline-block bg-blue-700 px-7 py-4 font-bold text-white rounded-lg text-lg hover:bg-blue-800'>Get The Brochure</a>
                    </div>
                </section>
            </main>
        </>
    )
}
