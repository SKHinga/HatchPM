import React, {useContext} from 'react'
import { Projects } from '../../Helper/Context';

function Filter() {

  const {handleCategoryChange} = useContext(Projects);

  

  
  return (
    <div>
      <div className='flex h-24 items-end'>
        <label htmlFor='select' className='cal ml-2'>
          Filter
          <select id='select' onChange={handleCategoryChange} className='font-normal put md:w-36 ml-1'>
            <option value='All'>All</option>
            <option value='In progress'>In progress</option>
            <option value='Complete'>Complete</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Filter