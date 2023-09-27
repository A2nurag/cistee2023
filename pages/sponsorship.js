import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function sponsorship() {
  return (
    <>
      <Head>
        <title>Sponsorship | CISTEE 2023</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Navbar pageName='brochure' />

        <section className='py-20 w-full text-slate-800 min-h-max px-2'>
          <div className='container mx-auto max-w-6xl'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              Sponsorship
            </h1>
            <p>
              To be updated!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
