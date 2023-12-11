import Announcements from "@/components/Announcements";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MassSchedule from "@/components/Mass_Schedule";
import Navbar from "@/components/Navbar";


export default function  Home(){
  const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari.jpg'
  const text ='We are born to love, we live to love, and we will die to love still more.'
  return (
    <Layout>
      <Hero imageUrl={imageurl} text={text}/>
      <MassSchedule/>
      <Announcements/>
    </Layout>
  )
}