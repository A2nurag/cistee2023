import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function brochure() {
    return (
        <>
            <Head>
                <title>Contact | CISTEE 2023</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={inter.className}>
                <Navbar pageName='contact' />

                <section className='py-20 w-full text-slate-800 min-h-max px-2'>
                    <div className='container mx-auto max-w-6xl'>
                        <h1 className='text-5xl font-extrabold mb-6 uppercase'>
                            Contact
                        </h1>
                        <p className='font-bold'>
                            For any queries related to Conference Email us at : 
                        </p>
                        <a href='mailto:cistee2023@gmail.com' target='_blank' rel='noreferrer' className='text-blue-800 underline'>
                           cistee2023@gmail.com
                        </a>
                    </div>
                </section>
            </main >
        </>
    )
}
