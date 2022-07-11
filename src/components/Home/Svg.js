import React from 'react'

const svg = require ('../assets/Project-logo.png')

function Svg() {
  return (
    <div id='home' className='grid grid-cols-10 md:grid-cols-12 mb-3'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-10 md:col-span-5 flex flex-col justify-center'>
        <h2 className='text-5xl font-bold p-3 md:p-0'>
          Easy way <br className='hidden md:contents'></br>to <span className='orange'>Manage</span>
          your<br></br> projects.
        </h2>
        <p className='gress md:mt-5 text-xl p-3 md:p-0'>Your one stop shop to manage any basic or<br></br> complex projects.</p>
      </div>
      <div className='col-span-10 md:col-span-5'>
        <img src={svg} alt='Logo'/>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default Svg