import { format } from 'date-fns';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Eventcard({event}) {
    function formatDateForDisplay(date) {
        return date ? format(new Date(date), "MMMM d, yyyy - h:mm a") : '';
      }
    
  return (
    <div>

<Link href={`/community/event/${event._id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-primary dark:hover:bg-gray-700">
      <div className="relative w-full h-56  md:w-56">
        {/* Adjust the size of the Image component */}
        <Image
          layout="fill"
          objectFit="cover" // This ensures the image covers the entire container
          src={event.images[0]}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
        <p className="mb-3 font-bold text-primary1 dark:text-primary1">Date: {formatDateForDisplay(event.date)}</p>
        <p className="mb-3 font-bold text-primary1 dark:text-primary1">venue: {event.venue}</p>
      </div>
    </Link>


        
    </div>
  )
}

export default Eventcard