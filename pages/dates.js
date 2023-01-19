import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function Dates() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </Head>
      <main className={inter.className}>
        <Navbar pageName='dates' />

        <section className='bg-[#59C3C3] py-20 w-full text-slate-800 min-h-max'>
          <div className='container mx-auto max-w-5xl text-justify'>
            <h1 className='text-5xl font-extrabold mb-6'>DATES</h1>
            <ul className='flex list-inside list-disc flex-col gap-4 font-md'>
              <li>
                Full paper submission portal opens:{' '}
                {/* <span className='font-bold text-red-500'>9th June 2022</span> */}
              </li>
              <li>Full paper Submission portal closes: </li>
              <li>Notification of Acceptance of the manuscript: </li>
              <li>Final Camera-ready paper submission: </li>
              <li>Deadline for Registration: </li>
              <li>Conference Dates: </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
