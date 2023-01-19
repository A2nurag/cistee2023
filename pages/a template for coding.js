import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function pageName() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </Head>
      <main className={inter.className}>
        <Navbar pageName='pageName' />

        <section className='bg-[#59C3C3] py-20 w-full text-slate-800 min-h-max'>
          <div className='container mx-auto max-w-5xl text-justify'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              Page Name
            </h1>
          </div>
        </section>
      </main>
    </>
  )
}
