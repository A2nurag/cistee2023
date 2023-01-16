import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function paperSubmission() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </Head>
      <main className={inter.className}>
        <Navbar pageName='paperSubmission' />

        <section className='bg-[#59C3C3] py-20 w-full text-slate-800 min-h-max'>
          <div className='container mx-auto max-w-5xl text-justify'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              Paper Submission
            </h1>
          </div>
        </section>
      </main>
    </>
  )
}
