import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import { Projects } from '../../Helper/Context';

function Dash() {
  const {itemsToDisplay} = useContext(Projects);
  const {deleteProj, pickId} = useContext(Projects);


  

  const data = itemsToDisplay?.map((proj, index) =>(
    <div className='bg-white p-3' key={proj.id}>
      <div>
        <div className='flex justify-between'>
          <h3 className='cal font-bold'>{proj.project_name}</h3>
        </div>
        <p className='orange'>{proj.progress}</p>
        <h4 className='gress'>Project Scope:</h4>
        <p className='cal'><em>{proj.project_scope}</em></p>
        <h4 className='gress'>Description:</h4>
        <p className='text-sm'>{proj.description}</p>
        <div className='flex justify-between mt-1'>
          <Button onClick={()=>deleteProj(proj.id)} variant="outlined" className='material-button text-end'>Delete</Button>
          <Button onClick={()=>pickId(proj.id)} variant="outlined" className='material-button text-end'>Tasks</Button>
        </div>
      </div>
    </div>
    )
  )

  

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
          {data}
      </div>    
    </div>
  )
}

export default Dash