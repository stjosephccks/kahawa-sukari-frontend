import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function EventDetals() {
  const router= useRouter()
  const{id}= router.query;
  const[event, setEvent]= useState([])

  const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg'
const title='Event:'


  useEffect(()=>{
    if(!id){
      return;
    }
    axios.get('/api/events?id=' +id).then(response=>{
      setEvent(response.data);
    });
  },[id])
  return (
    <Layout>
      <Hero imageUrl={imageurl} title={title} text={event.title}/>


      
    </Layout>
  )
}  

export default EventDetals