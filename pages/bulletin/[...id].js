import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import RichTextEditor from '@/components/RichTextEditor'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function BulletDetailsPage({initialContent}) {
const [bulletin, setBulletin]= useState([])    
const router = useRouter()
const {id} = router.query
console.log('ID:', id);
const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg'
const title='Bulletin:'
useEffect(()=>{
    if(!id){
        return;
    }
    axios.get('/api/bulletins?id=' +id).then(response=>{
        setBulletin(response.data)
    });

},[id])




  return (
    <Layout>
        <Hero text={bulletin.title} imageUrl={imageurl} title={title}/>
        <div  className='text-center'>
        <h1 className='text-primary mt-24 ml-3 md:text-center'>{bulletin.title}</h1>
         <h3 className='text-center my-2 italic '>
            {bulletin.description}
         </h3>      

         {bulletin.content && <RichTextEditor initialContent={bulletin.content} readOnly={true}/> 
}
        
         
         

        </div>

    </Layout>
    
  )
}

export default BulletDetailsPage