import React, {useState} from 'react'
import Minimenu from './Minimenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Dash() {
  const [miniMenu, setMiniMenu] = useState(false);

  const handleMiniMenu = () => {
    setMiniMenu(miniMenu=>!miniMenu);
  }

  return (
    <div>
          <div className='bg-white p-3 relative'>
            <div>
              <div className='flex justify-between'>
                <h3 className='cal font-bold'>Project Hatch PM</h3>
                <MoreVertIcon onClick={handleMiniMenu} className='cursor-pointer'/>
              </div>
              <p className='orange'>In progress</p>
              <h4 className='gress'>Project Scope:</h4>
              <p className='cal'><em>Website</em></p>
              <h4 className='gress'>Description:</h4>
              <p className='text-sm'>Your one stop shop to manage any basic or complex projects.</p>
            </div>
            {miniMenu && <Minimenu/>}
          </div>
    </div>
  )
}

export default Dash