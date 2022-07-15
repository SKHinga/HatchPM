import React, {useContext, useState} from 'react'
import Minimenu from './Minimenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Projects } from '../../Helper/Context';

function Dash() {
  const [miniMenu, setMiniMenu] = useState(false);
  const {itemsToDisplay} = useContext(Projects);
  const {deleteProj} = useContext(Projects);

  

  const handleMiniMenu = (id) => {
    setMiniMenu(miniMenu=>!miniMenu);  
  }


  const data = itemsToDisplay?.map((proj, index) =>(
    <div className='bg-white p-3 relative' key={proj.id}>
      <div>
        <div className='flex justify-between'>
          <h3 className='cal font-bold'>{proj.project_name}</h3>
          <MoreVertIcon onClick={()=>{handleMiniMenu(index);}} className='cursor-pointer'/>
        </div>
        <p className='orange'>{proj.progress}</p>
        <h4 className='gress'>Project Scope:</h4>
        <p className='cal'><em>{proj.project_scope}</em></p>
        <h4 className='gress'>Description:</h4>
        <p className='text-sm'>{proj.description}</p>
      </div>
      {miniMenu && <Minimenu handleDelete={deleteProj(proj.id)}/>}
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