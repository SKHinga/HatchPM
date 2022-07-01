import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='flex justify-center items-center h-5/6 mt-10 md:mt-0'>
      <Calendar onChange={onChange} value={value}/>
    </div>
  );
}

export default Calender