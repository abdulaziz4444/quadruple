import React from 'react'
import BlogLeft from './components/BlogLeft'
import BlogRight from './components/BlogRight'
import Footer1 from "@/app/blog/components/Footer1"
const page = () => {
  return (
    <>
    <section className=' border-t border-zinc-300'>
    <div className='md:container mx-auto px-5'>
        <div className='grid lg:grid-cols-12 grid-cols-1 2xl:gap-32 xl:gap-20 lg:gap-10 md:gap-6 gap-3'>
            <div className='lg:col-span-8 col-span-full md:pt-10 pt-4'>
                <BlogLeft/>
            </div>
            <div className='lg:col-span-4 col-span-full xl:mt-24 lg:mt-20 md:mt-10 mt-4'>
              <BlogRight/>
            </div>
        </div>
    </div>
    </section> 
    <Footer1/>
    </>
  )
}

export default page