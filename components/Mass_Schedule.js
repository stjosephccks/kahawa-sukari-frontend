import React from 'react'

function MassSchedule() {
  return (
    <div className=" flex flex-col md:flex-row md:ml-44 ">
    <div className="md:w-1/2 p-4  "> {/* Adjust the width and padding as needed */}
      {/* Content for the first column */}
      <h1 className='my-10'>Mass Times.</h1>
      <div>
        <h2>Tuesday-Friday</h2>
        <h3>7:30 am & 6:00pm</h3>
        <h2>Monday & Saturday</h2>
        <h3>7:30 am </h3>
        <h2>Sunday</h2>
        <h3>7:30 am, 9:00 am, 10:30 am, 12:00 noon </h3>
      </div>
      <h1 className='my-10'>Confessions.</h1>
      <div>
        <h2>Tuesday-Friday</h2>
        <h3>5:30 pm </h3>
        <h2>Sunday</h2>
        <h3>7:30 am - 11:30 am</h3>
    </div>
    </div>
    <div className="md:w-1/2 p-4"> {/* Adjust the width and padding as needed */}
      {/* Content for the second column */}
      <h1 className='my-10'>Eucharistic Adoration</h1>
      <div>
        <h3>In the Church:</h3>
        <h2>Monday-Saturday</h2>
        <h3>7:00 am </h3>

      </div>
      <h1 className='my-10'>Holy Rosary</h1>
      <h2>Tuesday-Friday</h2>
        <h3>5:30 pm </h3>
        <h2>Sunday</h2>
        <h3>7:00 pm </h3>

    </div>
  </div>
  )
}

export default MassSchedule