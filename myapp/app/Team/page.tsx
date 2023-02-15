"use client"
import Image from 'next/image'
import {  useState } from 'react'
import data from '../../pages/api/data.json'
import Business from '../../public/images/businrss.jpg'
import Tech from '../../public/images/tech.jpg'
import Translation from '../../public/images/trans.jpg'
import Avatar from '../../public/images/avatar.png'
import Link from 'next/link'


export default function Team() {

  let filtered: string
  const [first, setfirst] = useState(data)


  function setValue(e: any){
    filtered = e.target.value
    console.log(filtered)
    if (filtered === "All"){
      let displayed = data
      setfirst(displayed)
      }
    else  if (filtered === "Translation"){
        let displayed = data.filter(e => e.category === "Translation")
        setfirst(displayed)
  
      }
   else   if (filtered === "Business"){
        let displayed = data.filter(e => e.category === "Business")
        setfirst(displayed)
  
      }
    else if(filtered === "Technology"){
        let displayed = data.filter(e => e.category === "Technology")
        setfirst(displayed)
  
      }
  }





    
  return (
    <div className='flex  flex-col justify-between'>

      <div className='md:p-5 flex flex-shrink'>
    <form className='flex m-auto  md:flex-row items-center p-2 rounded bg-orange-400' >
   <label className=' p-2'  >All</label>
  <input  onChange={(e)=>setValue(e)} defaultChecked   type="radio"  name="team"   value="All"/>
  <label className='p-2' >Technology</label>  
  <input  onChange={(e)=>setValue(e)} type="radio"  name="team" value="Technology"/>
    <label  className='p-2'>Business</label>
  <input onChange={(e)=>setValue(e)} type="radio"  name="team" value="Business"/>
  <label  className='p-2'>Translation</label>
  <input onChange={(e)=>setValue(e)} type="radio"  name="team" value="Translation"/>
    </form>
      </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto'>
        {first.map((e,index) => {return(<div key={index}><div className="p-5">{e.category === "Technology"?




        <>

        <div className='text-black  bg-[#716CEE] rounded w-80'>
        <Image className='rounded-t'  src={Tech} alt={"Tech Experts"} width={"350"} height={"300"}/>
        <div className='flex justify-between flex-row-reverse'>
        <p className="w-72 ">Name: {e.name} <br/>  Balance: {e.balance} <br/> {e.category}</p>
    </div> 
    <div className='p-2 text-right'> <button className='border border-green-400 bg-green-300 px-5 rounded'><Link href={`./Team/${e.id}`} as={`./Team/${e.id}`}>Hire Me</Link></button></div>    </div>
    </>



        : e.category === "Business"?
        <><div className='text-black bg-[#DBC42A] rounded w-80'>
        <Image className='rounded-t   ' src={Business} alt={"Tech Experts"} width={350}/>
        <div className='flex justify-between flex-row-reverse'>
        <p className="w-72 ">Name: {e.name} <br/>  Balance: {e.balance} <br/> {e.category}</p>

    </div>   
    <div className='p-2 text-right'> <button className='border border-red-400 bg-red-300 rounded text-right px-5 '><Link href={`./Team/${e.id}`} as={`./Team/${e.id}`}>Hire Me</Link></button></div> 
          </div></> 
        :e.category === "Translation"? 

        <><div className='text-black bg-[#4BB1DA]  rounded w-80 '> 
         <Image className='rounded-t ' src={Translation} alt={"Tech Experts"} width={"350"} height={"300"}/>
        <div className='flex justify-between flex-row-reverse'>
        <p className="w-72 ">Name: {e.name} <br/>  Balance: {e.balance} <br/> {e.category}</p>

    </div>   <div className='p-2 text-right'> <button className='border border-yellow-400 bg-yellow-300 rounded text-right px-5 '><Link href={`./Team/${e.id}`} as={`./Team/${e.id}`}>Hire Me</Link></button></div>   
  </div></>:""}</div></div>)})}</div>



    </div>
  )
}



