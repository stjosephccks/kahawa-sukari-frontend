import Announcements from "@/components/Announcements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MassSchedule from "@/components/Mass_Schedule";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import { useEffect, useRef } from "react";


export default function  Home(){
  
  const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari.jpg'
  const title ='LIVING IN LOVE'
  const text ='We are born to love, we live to love, and we will die to love still more.'
  return (
    <Layout>
      <Hero imageUrl={imageurl} title={title} text={text}/>
      <MassSchedule/>
      <div>
        <Announcements />
      </div>
      
      <Welcome id='welcome'/>
   
    </Layout>
  )
}