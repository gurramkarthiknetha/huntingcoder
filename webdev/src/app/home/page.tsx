import React from 'react'
import Image from 'next/image'
function home() {
  return (
    <div className='text-center'>
        <h1 className='text-center font-serif'>Next js Class1</h1>
        <Image className='rounded-lg block mx-auto' src={'/images/meet.jpg'} height={200} width={200} alt='meet'/>
        <h3 className='my-3 text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas?</h3>
        <h1 className="my-4">Latest Blogs</h1>
    </div>
  )
}

export default home