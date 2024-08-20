"use client"
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from 'next/navigation'

const Whatsapp = () => {
  const handleClick = async () => {
    const phoneNumber = '03484765291';
    const message = 'hello sir!'

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  }
  return (
    <>
      <div className='p-2 fixed 
          bottom-10 right-4 cursor-pointer md:right-8 ' onClick={handleClick}>
        <IoLogoWhatsapp className='md:w-12 w-8 md:h-12 h-8 bg-green text-gray p-1 rounded-full' />

      </div>
    </>
  )
}

export default Whatsapp