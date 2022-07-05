import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

function Features() {
  return (
    <div className='grid grid-cols-10 md:grid-cols-12'>
       <div className='hidden md:contents'><div></div></div>
       <div className='col-span-10 md:col-span-10'>
        <h2 className='font-bold cal text-xl text-center'>Best <span className='orange'>Features</span> for your<br></br> projects</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-2'>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <LockIcon className='text-indigo-600'/>
              <p className='font-bold text-base cal'>Secure</p>
              <p className='gress md:pb-2'>As damaging as threats to a business’ data security can be, they’re also easily avoidable when you have the appropriate safeguards in place.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <HourglassBottomIcon className='text-fuchsia-400'/>
              <p className='font-bold text-base cal'>Timely</p>
              <p className='gress md:pb-2'>Punctuality informs many aspects of Executive Presence. Being on time helps you to establish a good reputation and allows others to trust you.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <ConstructionIcon className='text-teal-300'/>
              <p className='font-bold text-base cal'>Structured</p>
              <p className='gress md:pb-2'>Company structure is a system outlining how the activities are organized and directed to achieve goals.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <ArchitectureIcon className='text-emerald-500	'/>
              <p className='font-bold text-base cal'>Constructive</p>
              <p className='gress md:pb-2'>Making your company succeed is a never ending set of challenges. However, if you embrace constructive discontent, you can help you and your team thrive.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <CollectionsBookmarkIcon className='text-orange-500'/>
              <p className='font-bold text-base cal'>Collection</p>
              <p className='gress md:pb-2'>A collective business system is a business organization or association typically composed of relatively large numbers of businesses.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full md:w-3/4 bg-white p-1'>
              <EmojiObjectsIcon className='text-amber-300'/>
              <p className='font-bold text-base cal'>Idea</p>
              <p className='gress md:pb-2'>Establish objectives for your presentation. Let your objectives be your guide.</p>
            </div>
          </div>
        </div>
       </div>
       <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default Features