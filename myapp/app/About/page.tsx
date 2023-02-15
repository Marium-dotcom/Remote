import Image from 'next/image'
import React from 'react'
import remote from '../../public/images/remote.jpg'

export default function About() {
  return (
    <div>
      <h2 className='text-2xl text-center my-10 underline decoration-wavy decoration-yellow-300'>About us</h2>

<div className='flex  flex-col lg:flex-row items-center justify-center my-5'>
  <Image className='m-2 rounded-r-full' src={remote} width={450} height={300} alt={"remote"}/>
  <div className='text-center rounded-full  p-2 grid md:grid-cols-1'>
    <p className='w-72 border-2 border-dashed m-1 rounded-xl border-yellow-300 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente nemo minima id neque commodi voluptatem, molestias fugiat officia enim quasi, quis a, sit quos.</p>
    <p className='w-72 border-2 border-dashed m-1 rounded-xl border-yellow-300  p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente nemo minima id neque commodi voluptatem, molestias fugiat officia enim quasi, quis a, sit quos.</p>

  </div>
  
</div>

    </div>
  )
}
