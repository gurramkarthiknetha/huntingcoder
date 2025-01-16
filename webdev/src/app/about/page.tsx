import React from 'react'

function about() {
  return (
    <div className='my-6'>
      <h1 className='text-center'>
        About our Website
      </h1>
      <div className='w-1/2 mx-auto block'>
        <h2 className='font-bold text-[1.8rem]'>Introduction</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nostrum repudiandae est repellat repellendus ipsum nihil id at voluptatem error. Ipsam ab expedita ad aliquam sit quasi unde. Sed, qui! Quo praesentium neque vero recusandae illo magni, autem veniam nisi.</p>
      </div>
      <div className='w-1/2 mx-auto block my-6'>
        <h2 className='font-bold text-[1.8rem]'>Services offered</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nostrum repudiandae est repellat repellendus ipsum nihil id at voluptatem error. Ipsam ab expedita ad aliquam sit quasi unde. Sed, qui! Quo praesentium neque vero recusandae illo magni, autem veniam nisi.</p>
        <ul className='ml-5 list-decimal lining-nums'>
          <li className=''>hello this is the one of the point</li>
          <li>hello this is the one of the point</li>
          <li>hello this is the one of the point</li>
          <li>hello this is the one of the point</li>
          <li>hello this is the one of the point</li>
        </ul>
      </div>
      <div className='w-1/2 mx-auto block my-6'>
        <h2 className='font-bold text-[1.8rem]'>contact us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nostrum repudiandae est repellat repellendus ipsum nihil id at voluptatem error. Ipsam ab expedita ad aliquam sit quasi unde. Sed, qui! Quo praesentium neque vero recusandae illo magni, autem veniam nisi.</p>
      </div>
    </div>
  )
}

export default about