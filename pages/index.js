import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";


export default function  Home(){
  const imageurl ='https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/309154881_418748297054427_2476714163710300533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=WHlFZbZKqEkAX-UYgb0&_nc_ht=scontent-mba1-1.xx&oh=00_AfAugd7YpQDpwMPLwdA57EkGJ9gpBJIv37QKRK44kjNTjQ&oe=6574771C'
  const text ='We are born to love, we live to love, and we will die to love still more.'
  return (
    <Layout>
      <Hero imageUrl={imageurl} text={text}/>
    </Layout>
  )
}