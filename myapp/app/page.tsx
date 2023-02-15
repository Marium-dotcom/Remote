"use client"
import Image from 'next/image'
import React from 'react'
import desktop from '../public/images/image-hero-desktop.png'
import JoinUs from './JoinUs'
import { ToastContainer } from 'react-toastify';




export default function Landing() {
  return (
<>
<ToastContainer/>
    <div className="flex  flex-col-reverse items-center lg:justify-center lg:flex-row">
      <section className="m-4">
        <h2 className='text-5xl p-2 font-bold'>Make <br/> remote work</h2>
        <p className="w-72 p-2 text-xl my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi, incidunt molestias officia voluptas voluptates?</p>
        <JoinUs/>
      </section>
         <Image src={desktop} width={390} height={300} alt={'Home'}/>

    </div>
    </>

  )
}
