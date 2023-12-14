import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import axios from 'axios';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function EventDetals() {
  const router= useRouter()
  const{id}= router.query;
  const[event, setEvent]= useState()
  const [events,setEvents]=useState([])
  

  const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg'
const title='Event:'

  function formatDateForDisplay(date) {
      return date ? format(new Date(date), "MMMM d, yyyy - h:mm a") : '';
    }
  

  useEffect(()=>{
    if(!id){
      return;
    }
    axios.get('/api/events?id=' +id).then(response=>{
      setEvent(response.data);
    });
  },[id])

  useEffect(()=>{
      axios.get('/api/events').then(response=>{
        setEvents(response.data);
      });
  },[])
  if (!event) {
    return <p>Loading...</p>; // Handle the case where event is still loading
  }
  return (
    <Layout>
      <Hero imageUrl={imageurl} title={title} text={event.title}/>
      <div className="flex flex-col md:flex-row md:ml-44 ">
            <div className="md:w-1/2 p-4 ">
              
                <Image 
                className='rounded-md'
                layout='responsive'
                width={250}
                  height={250}
                  src={event.images[0]}/>


            
              
               <h2>{event.title}</h2> 
               <h4 className='italic'>{formatDateForDisplay(event.date)}</h4>
               <p>{event.description}</p>
            </div>
            <div className="md:w-1/2 p-4  ">
              <h1> Events</h1>
              {events.map(e=>(
                 <div key={e._id}>
                  
                  <Link className='text-primary1 underline' href={`/community/event/${e._id}`}>{e.title}</Link>
                  
                  </div> 

              ))}
            </div>
       </div> 



    </Layout>
  )
}  

export default EventDetals