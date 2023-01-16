import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ImageGallery from 'react-image-gallery'

export default function Carousel() {
  const featuredImages = [
    {
      original: '/Slides/slide0.jpg',
    },
    {
      original: '/Slides/slide1.jpg',
    },
    {
      original: '/Slides/slide2.jpg',
    },
    {
      original: '/Slides/slide3.jpg',
    },
    {
      original: '/Slides/slide4.jpg',
    },
    {
      original: '/Slides/slide5.jpg',
    },
    {
      original: '/Slides/slide6.jpg',
    },
    {
      original: '/Slides/slide7.jpg',
    },
    {
      original: '/Slides/slide8.jpg',
    },
    {
      original: '/Slides/slide9.jpg',
    },
  ]

  return (
    <div className='w-screen h-screen bg-red-300'>
      <ImageGallery
        items={featuredImages}
        // infinite={true}
        // showFullscreenButton={false}
        // showThumbnails={false}
        // showPlayButton={false}
        // slideInterval={7000}
        // renderLeftNav={(onClick, disabled) => (
        //   <div className='absolute left-0 top-0 bottom-0 z-10 flex w-16 items-center justify-center'>
        //     <button
        //       onClick={onClick}
        //       disabled={disabled}
        //       className='inline-block rounded-full bg-slate-50 bg-opacity-20 p-3 shadow-md transition hover:bg-opacity-75'
        //     >
        //       <ChevronLeft />
        //     </button>
        //   </div>
        // )}
        // renderRightNav={(onClick, disabled) => (
        //   <div className='absolute right-0 top-0 bottom-0 z-10 flex w-16 items-center justify-center shadow-md'>
        //     <button
        //       onClick={onClick}
        //       disabled={disabled}
        //       className='inline-block rounded-full bg-slate-50 bg-opacity-20 p-3 transition hover:bg-opacity-75'
        //     >
        //       <ChevronRight />
        //     </button>
        //   </div>
        // )}
      />
    </div>
  )
}
