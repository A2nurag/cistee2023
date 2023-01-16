import React, { useState } from 'react'
import Link from 'next/link'
import SideBar from './sidebar'
import { ChevronDown } from 'react-feather'

export default function Navbar({ pageName }) {
  const [clicked, setClicked] = useState(false)
  const [drop, setDrop] = useState(false)
  const linkClassPC =
    'text-slate-200 font-medium hidden md:flex border-b-transparent border-b-2 hover:border-b-slate-200 transition cursor-pointer user-select-none'
  const linkClassPCActive =
    'text-slate-200 font-medium hidden md:flex border-b-slate-200 border-b-2'
  const bg =
    pageName === 'home'
      ? 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.72) 37.5%, rgba(0, 0, 0, 0) 100%)'
      : ''
  return (
    <>
      <nav
        style={{
          background: `${bg}`,
        }}
        className='bg-black bg-opacity-90'
      >
        <div className='flex align-center justify-center gap-10 py-6'>
          <Link
            href='/'
            className={pageName == 'home' ? linkClassPCActive : linkClassPC}
            title='Home - IEEE CATCON 2022'
          >
            Home
          </Link>

          <Link
            href='/dates'
            className={pageName == 'dates' ? linkClassPCActive : linkClassPC}
            title='Dates - IEEE CATCON 2022'
          >
            Dates
          </Link>

          <Link
            href='/registration'
            className={
              pageName == 'registration' ? linkClassPCActive : linkClassPC
            }
            title='Registration - IEEE CATCON 2022'
          >
            Registration
          </Link>

          <Link
            href='/callForPapers'
            className={
              pageName == 'call for papers' ? linkClassPCActive : linkClassPC
            }
            title='Call For Papers - IEEE CATCON 2022'
          >
            Call for Papers
          </Link>

          <Link
            href='/paperSubmission'
            className={
              pageName == 'paper submission' ? linkClassPCActive : linkClassPC
            }
            title='Paper Submission - IEEE CATCON 2022'
          >
            Paper Submission
          </Link>

          <Link
            href='/committee'
            className={
              pageName == 'committee' ? linkClassPCActive : linkClassPC
            }
            title='Committee - IEEE CATCON 2022'
          >
            Committee
          </Link>

          <Link
            href='/program'
            className={pageName == 'program' ? linkClassPCActive : linkClassPC}
            title='Program - IEEE CATCON 2022'
          >
            Venue & Program
          </Link>

          <a
            className={pageName == 'more' ? linkClassPCActive : linkClassPC}
            onClick={() => setDrop(!drop)}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            More
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-chevron-down'
            >
              <polyline points='6 9 12 15 18 9'></polyline>
            </svg>
          </a>

          {/* The drop down */}
          {/*drop && (
            <div className='absolute top-[3.25rem] right-0 rounded-2xl bg-zinc-700 p-3'>
              <Link href='/brochure'>
                <a className={linkClassPC} title='Brochure - IEEE CATCON 2022'>
                  Brochure
                </a>
              </Link>

              <Link href='/transportationClimate'>
                <a
                  className={linkClassPC}
                  title='About Durgapur-Transportation & Climate - IEEE CATCON 2022'
                >
                  About Durgapur-Transportation & Climate
                </a>
              </Link>

              <Link href='/accomodation'>
                <a
                  className={linkClassPC}
                  title='Accommodation & List of Hotels - IEEE CATCON 2022'
                >
                  Accommodation & List of Hotels
                </a>
              </Link>

              <Link href='/template'>
                <a className={linkClassPC} title='Template - IEEE CATCON 2022'>
                  IEEE Conference-Template
                </a>
              </Link>

              <Link href='/sponsorship'>
                <a
                  className={linkClassPC}
                  title='Sponsorship - IEEE CATCON 2022'
                >
                  Sponsorship
                </a>
              </Link>

              <Link href='/programSchedule'>
                <a
                  className={linkClassPC}
                  title='Program Schedule - IEEE CATCON 2022'
                >
                  Program Schedule
                </a>
              </Link>

              <Link href='/contact'>
                <a className={linkClassPC} title='Contact - IEEE CATCON 2022'>
                  Contact
                </a>
              </Link>
              <Link href='/bankDetails'>
                <a
                  className={linkClassPC}
                  title='Bank Details - IEEE CATCON 2022'
                >
                  Bank Details
                </a>
              </Link>
            </div>
          )*/}
        </div>
      </nav>
      {clicked && <SideBar clicked setClicked={setClicked} pageName />}
      <div className='w-full overflow-hidden rounded-lg bg-zinc-700'>
        <div
          className='flex w-max cursor-pointer flex-row items-center gap-2 rounded-lg bg-zinc-700 px-6 py-4 transition-all hover:bg-zinc-600 focus:bg-zinc-600 active:scale-90 md:hidden'
          onClick={() => setClicked(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-menu stroke-zinc-300'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
          <p className='text-lg font-semibold text-zinc-300'>Menu</p>
        </div>
      </div>
    </>
  )
}
