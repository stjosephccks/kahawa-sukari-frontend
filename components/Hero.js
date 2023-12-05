import React from 'react'

function Hero({imageUrl, text}) {
  return (
    <div className="relative h-auto md:h-64 flex items-center justify-center">
      <img
        className="object-cover w-full h-full"
        src={imageUrl}
        alt="Hero Image"
      />
      <div className="absolute text-center text-yellow-400">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default Hero