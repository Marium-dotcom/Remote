import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import data from '../../../pages/api/data.json'
import avatar from '../../../public/images/avatar2.png'


export default function Page({params}:any) {


const fil = data.filter(e => e.id == params.id)



    return (
<>
<h2 className='text-2xl text-center my-10 underline decoration-wavy decoration-yellow-300'>Contact Details</h2>


        <div className='md:w-8/12 md:m-auto rounded '>      {fil.map(e =>
        <>


        <div className= {`p-3 my-5 ${e.category == "Technology" ? "bg-purple-400": e.category == "Business"? "bg-yellow-300" : "bg-sky-300"} `}>
              <Image className='m-auto ' src={avatar} width={150} height={150} alt={e.category}/>

            <p className='text-xl'>
         <span className='font-bold'>Name: </span> {e.name} <br/>
         <span className='font-bold'> E-Mail: </span>  {e.email} <br/>
         <span className='font-bold'>Age:</span>  {e.age}   <br/>
         <span className='font-bold'>  About: </span> {e.about.slice(1,100)} <br/>
         <span className='font-bold'>Expert in:</span> {e.category} <br/>
         <span className='font-bold'>Income from freelancing:</span> {e.balance}


            </p>

            <form className='text-center' action={`mailto:${e.email}`}method="post"encType="text/plain">
    <input className="border bg-yellow-300 border-yellow-300 px-3 rounded hover:cursor-pointer" type="submit" value="Email Now"/>
</form>
            </div>
        </> )}
        
        </div>

    <div className='mx-3'>  <Link className='text-xl  underline decoration-dashed underline-offset-4 decoration-green-400' as={'./Team'} href={'./Team'}><p> {`<- back to team`}</p></Link>  
    </div></>
  )
}

