import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

// const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function template() {
  return (
    <>
      <Head>
        <Head>
          <title>IEEE CATCON 2022</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </Head>
      <main>
        <Navbar pageName='template' />

        <section className='bg-[#D81E5B] py-20 w-full text-zinc-200 min-h-max'>
          <div className='container mx-auto max-w-5xl text-justify'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              IEEE CONFERENCE TEMPLATE
            </h1>
            <h2 className='my-2 text-2xl font-bold'>
              For IEEE Conference Template, Click here
            </h2>

            <div className='mt-2 flex items-center gap-5'>
              <a
                className='rounded-lg bg-zinc-200 py-4 px-8 text-center text-base font-semibold text-black shadow-md transition duration-200 ease-in '
                href='/IEEE Conference-Template.docx'
                target='_blank'
              >
                <div className='flex flex-col items-center gap-2'>
                  <img src='/misc/word.png' className='w-12' />
                  Word File
                </div>
              </a>

              <a
                href='/IEEE Conference-Template.pdf'
                className='rounded-lg bg-zinc-200 py-4 px-8 text-center text-base font-semibold text-black shadow-md transition duration-200 ease-in'
                target='_blank'
              >
                <div className='flex flex-col items-center gap-2'>
                  <img src='/misc/pdf.png' className='w-12' />
                  PDF File
                </div>
              </a>
            </div>
            <p className='my-5'>
              IEEE Templates Link page :{' '}
              <a
                href='https://www.ieee.org/conferences/publishing/templates.html'
                className='text-ellipsis font-medium text-blue-800 hover:underline'
              >
                https://www.ieee.org/conferences/publishing/templates.html
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
