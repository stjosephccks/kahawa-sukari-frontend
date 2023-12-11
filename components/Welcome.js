import Image from 'next/image'
import React from 'react'

function Welcome() {
  return (
    <div id='welcome'>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 px-4'/>
        <div className="flex flex-col md:flex-row md:ml-44 ">
        <div className="md:w-1/2 p-4 ">
              <img 
               src={'https://kahawa-sukari.s3.amazonaws.com/st.Joseph.jpg'}
               className='max-w-full h-auto md:h-72'/>
               <div className=''>
                    <h4>....., FSCB</h4>
                    <h4>phone</h4>
                    <h4 className='italic'>mail</h4>

               </div>
        </div>     
        <div className="md:w-1/2 p-4">
            <p>Description</p>
        </div>   

        </div>    
    </div>
  )
}

export default Welcome