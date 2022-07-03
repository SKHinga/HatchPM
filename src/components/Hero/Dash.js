import React, {useEffect, useState} from 'react'
import Minimenu from './Minimenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useUser from '../../hooks/useUser';

function Dash() {
  const [miniMenu, setMiniMenu] = useState(false);
  const user = useUser();
  const [onProjects, setOnProjects] = useState();
  useEffect(()=>{
    const collect = async() => {
      const response = await fetch(`https://hatch-pm.herokuapp.com/users/${user.userId}`);
      const users = await response.json();
      setOnProjects(users.projects)
    }
    collect();
  }, [user])

  const handleMiniMenu = (index) => {
    setMiniMenu(miniMenu=>!miniMenu);  
  }


  const data = onProjects?.map((proj, index) =>(
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
      {miniMenu && <Minimenu/>}
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