import React from 'react'
import Link from 'next/link'

export default function SideBar({ clicked, setClicked, pageName }) {
  const linkClassPC =
    'rounded-md px-3 py-3 text-light text-md hover:bg-gray-100 text-zinc-700 hover:text-gray-800'

  return (
    <div className='fixed inset-0 z-[9999] max-w-7xl bg-zinc-700 px-6 transition-all'>
      <div className='flex items-center justify-between'>
        <p className='py-6 font-[Barlow] text-xl font-medium uppercase text-zinc-100'>
          IEEE Catcon 2022
        </p>

        <div
          className='block cursor-pointer rounded-md bg-zinc-600 p-3 md:hidden'
          onClick={() => setClicked(false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='feather feather-menu stroke-zinc-100'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </div>
      </div>

      <div className='flex flex-col divide-y divide-zinc-500'>
        <Link href='/'>
          <a
            className='px-4 py-[5px] font-medium text-zinc-200'
            title='Home - IEEE CATCON 2022'
          >
            Home
          </a>
        </Link>

        <Link href='/dates'>
          <a
            className='px-4 py-[5px] font-medium text-zinc-200'
            title='Dates - IEEE CATCON 2022'
          >
            Dates
          </a>
        </Link>

        <Link href='/registration'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Registration - IEEE CATCON 2022'
          >
            Registration
          </a>
        </Link>

        <Link href='/callForPapers'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Call For Papers - IEEE CATCON 2022'
          >
            Call for Papers
          </a>
        </Link>

        <Link href='/paperSubmission'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Paper Submission - IEEE CATCON 2022'
          >
            Paper Submission
          </a>
        </Link>

        <Link href='/committee'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Committee - IEEE CATCON 2022'
          >
            Committee
          </a>
        </Link>

        <Link href='/program'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Program - IEEE CATCON 2022'
          >
            Venue & Program
          </a>
        </Link>

        <Link href='/brochure'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Brochure - IEEE CATCON 2022'
          >
            Brochure
          </a>
        </Link>
        <Link href='/transportationClimate'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='About Durgapur-Transportation & Climate - IEEE CATCON 2022'
          >
            About Durgapur-Transportation & Climate
          </a>
        </Link>

        <Link href='/accomodation'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Accommodation & List of Hotels - IEEE CATCON 2022'
          >
            Accommodation & List of Hotels
          </a>
        </Link>
        <Link href='/template'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Template - IEEE CATCON 2022'
          >
            IEEE Conference Template
          </a>
        </Link>

        <Link href='/sponsorship'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Sponsorship - IEEE CATCON 2022'
          >
            Sponsorship
          </a>
        </Link>

        <Link href='/programSchedule'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Program Schedule - IEEE CATCON 2022'
          >
            Program Schedule
          </a>
        </Link>

        <Link href='/contact'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Contact - IEEE CATCON 2022'
          >
            Contact
          </a>
        </Link>
        <Link href='/bankDetails'>
          <a
            className='py-[5px] px-4 font-medium text-zinc-200'
            title='Bank Details - IEEE CATCON 2022'
          >
            Bank Details
          </a>
        </Link>
      </div>
    </div>
  )
}
