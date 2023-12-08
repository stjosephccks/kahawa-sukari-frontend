import axios from 'axios';

import React, { useEffect, useState } from 'react'

export default function Announcements() {
  const [announcements, setAnnouncements]=useState([]);
  useEffect(()=>{
    axios.get('/api/announcements').then(response=>{
            setAnnouncements(response.data)
    })
},[])


  return (
    <div>
    <h1 className='text-primary mt-24 text-center'>Announcements</h1> 
    <div className='flex justify-center'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {announcements.map((announcement) => (
    <div key={announcement._id} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-semibold mb-2">{announcement.title}</h2>
      <p className="text-gray-700 text-xl mb-4">{announcement.description}</p>
      <h3 className="text-cyan-600">{announcement.sunday.sunday}</h3>
    </div>
  ))}
</div>
</div>

  </div>
  )
}


