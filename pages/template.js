import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function template() {
  return (
    <>
      <Head>
        <title>Template | CISTEE 2023</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Navbar pageName='template' />

        <section className='py-20 w-full text-slate-800 min-h-max px-2'>
          <div className='container mx-auto max-w-8xl'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              TEMPLATE
            </h1>
            <a
              href='/Author-Template-Springer.docx'
              className='my-4 rounded-lg bg-indigo-700 py-4 px-8 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-800'
              target='_blank'
            >
              Download the Template Here
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
