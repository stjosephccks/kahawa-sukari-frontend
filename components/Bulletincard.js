import bulletin from '@/pages/bulletin';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function BulletinCard({bulletin}) {
  

 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      
      <Link href={`/bulletin/${bulletin._id}`}>
        <img
        className="w-full h-64 object-cover"
        src={bulletin.images[0]}
        alt={bulletin.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{bulletin.title}</div>
        <p className="text-gray-700 text-base">{bulletin.description}</p>
      </div>
    </Link>
  </div>

  )
}

export default BulletinCard