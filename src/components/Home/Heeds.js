import React from 'react'

function Heeds({head, p1, p2, p3, p4}) {
  return (
    <div>
      <h3 className='font-bold cal'>{head}</h3>
      <p className='gress text-l hover:text-orange-600 cursor-pointer'>{p1}</p>
      <p className='gress text-l hover:text-orange-600 cursor-pointer'>{p2}</p>
      <p className='gress text-l hover:text-orange-600 cursor-pointer'>{p3}</p>
      <p className='gress text-l hover:text-orange-600 cursor-pointer'>{p4}</p>
    </div>
  )
}

export default Heeds