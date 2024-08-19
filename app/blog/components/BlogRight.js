import React from 'react'
import Image from 'next/image'

// Assets
import pic1 from "@/public/images/postpic.png"


const BlogRight = () => {
  return (
    <>
      <section  className='lg:flex-none flex flex-col lg:items-start items-center'>
        {/* blog categories */}
        <h2 className='text-darkgray lg:text-2xl md:text-xl text-lg capitalize font-semibold'>blog categories</h2>
        <div className='flex gap-4 md:py-5 py-2.5'>
          <div className='sm:py-3.5 py-3 sm:px-7 px-3 rounded-[30px] bg-gray'>
            <p className='font-medium sm:text-sm text-xs text-black capitalize text-center'>technology</p>
          </div>
          <div className='sm:py-3.5 py-3 sm:px-7 px-3 rounded-[30px] bg-gray'>
            <p className='font-medium sm:text-sm text-xs text-black capitalize'>inspiration</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='sm:py-3.5 py-3 sm:px-7 px-3 rounded-[30px] bg-gray'>
            <p className='font-medium sm:text-sm text-xs text-black capitalize'>development</p>
          </div>
          <div className='sm:py-3.5 py-3 sm:px-7 px-3 rounded-[30px] bg-gray'>
            <p className='font-medium sm:text-sm text-xs text-black capitalize'>tech news</p>
          </div>
        </div>
        {/* posts */}
        <div className='flex flex-col md:gap-5 gap-2.5 lg:pt-10 md:pt-7 pt-4'>
          <h2 className='text-darkgray lg:text-2xl md:text-xl text-lg capitalize font-semibold lg:text-start text-center'>trending post</h2>
          <div className='flex items-center md:gap-8 gap-4'>
            <p className='text-black font-medium sm:text-sm text-xs'>How modern technology builds
              <span className='block'> communities</span>
              </p>
            <Image src={pic1} alt='post image'/>
          </div>
          <div className='flex items-center md:gap-8 gap-4 border-t border-[#9CA3AF] md:pt-5 pt-3'>
            <p className='text-black font-medium sm:text-sm text-xs'>How modern technology builds
              <span className='block'> communities</span>
              </p>
            <Image src={pic1} alt='post image'/>
          </div>
          <div className='flex items-center md:gap-8 gap-4 border-t border-[#9CA3AF] md:pt-5 pt-3'>
            <p className='text-black font-medium sm:text-sm text-xs'>How modern technology builds
              <span className='block'> communities</span>
              </p>
            <Image src={pic1} alt='post image'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogRight