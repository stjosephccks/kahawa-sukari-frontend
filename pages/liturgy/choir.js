import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import React from 'react'

function Choir() {
  const text= 'Singing well  is praying twice'
  const link='https://www.facebook.com' 
  const linkTitle = 'st Romanos'
  const imageurl ='https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg'

  return (
    <Layout>
      <Hero imageUrl={imageurl} link={link} linkTitle={linkTitle} text={text}/>

      <div className='grid justify-items-center items-center'>
          <div>
            <h1>PMC Choir</h1>
          </div>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 w-full'/>
          <div>
            <h1>
              St. Romanos Choir
            </h1>
          </div>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 px-4 w-full'/>
          <div>
            <h1>St. Andrew of Crete</h1>
          </div>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 px-4 w-full'/>
          <div>
            <h1>Magnificant Choir</h1>
          </div>
      </div>
    </Layout>
  )
}

export default Choir