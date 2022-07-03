import React from 'react'

function Filter() {

  
  return (
    <div>
      <div className='flex h-24 items-end'>
        <label htmlFor='select' className='cal'>
          Filter
          <select id='select' className='font-normal put md:w-36 ml-1'>
            <option value='all'>All</option>
            <option value='in-progress'>In progress</option>
            <option value='complete'>Complete</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Filter