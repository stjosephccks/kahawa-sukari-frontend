import Link from 'next/link'
import React from 'react'


function Hero({imageUrl, title ,text, link, linkTitle}) {
  return (
    <div className="relative h-96 md:h-80 flex items-center justify-center">
      <img
        className="object-cover w-full h-full bg-blend-darken brightness-50"
        src={imageUrl}
        alt="Hero Image"
      />
      <div className="absolute text-center text-yellow-400">
        <h1 className='mb-2'>{title}</h1>
       
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 mx-2">
          {text}
        </h1>
        {link && (
             <Link className='border border-gray-500 p-3 text-xl text-center' href={link}>{linkTitle}</Link>
        )}
       
      </div>
    </div>
  )
}

export default Hero