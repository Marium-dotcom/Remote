"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_z1obkbs", 'template_gkh5kjd', form.current, 'HfIaV2JIzYfkqO2V2')
      .then((result) => {
          console.log(result.text);
          toast.success("Sent")
      }, (error) => {
          console.log(error.text);
          toast.error("failed")
      });
  };

  return (
    <>
<h2 className=' pt-5 '>Contact Us</h2>

<div className='bg-purple-200'>

            <form ref={form} onSubmit={sendEmail} className='flex  flex-col p-5 text-start'>
             
      <label className='p-1 '>Name</label>
      <input className='rounded' type="text" name="user_name" />
      <label className='p-1'>Email</label>
      <input className='rounded' type="email" name="user_email" />
      <label className='p-1'>Phone</label>
      <input className='rounded' type="number" name="phone" />
      <label className='p-1'>Message</label>
      <textarea className='rounded' name="message" />
      <input  className='border my-2 rounded text-white bg-blue-500 hover:cursor-pointer'  type="submit" value="Send" />

            </form>

<form>

</form>
    </div>
</>
  );
};


