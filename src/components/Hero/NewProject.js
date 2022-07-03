import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import useUser from '../../hooks/useUser';

function NewProject() {
  let navigate = useNavigate();
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    project_name: "",
    project_scope: "",
    deadline: "",
    description: "",
    progress: "In progress",
    user_id: user.userId,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch("https://hatch-pm.herokuapp.com/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    navigate("/dashboard");
    setFormData("")
  }


  return (
    <div className='h-full md:h-5/6 mt-5'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-around md:justify-between h-full'>
        <input 
        value={formData.project_name}
        onChange={handleChange} 
        type='text' 
        placeholder='Project name*' 
        id='project_name' 
        required 
        className='font-normal put w-full'/>
        <input
        value={formData.project_scope}
        onChange={handleChange}   
        type='text' 
        placeholder='Project scope*' 
        id='project_scope' 
        required 
        className='font-normal put w-full'/>
        <div className='flex flex-col'>
          <label htmlFor='deadline' className='gress'>Deadline:</label>
          <input
          value={formData.deadline}
          onChange={handleChange}
          type='date' 
          id='deadline' 
          required 
          className='font-normal put'/>
        </div>
        <textarea
        value={formData.description}
        onChange={handleChange} 
        className='w-full h-36 textarea' 
        id='description' 
        placeholder='Description*'/>
        <div className='flex justify-end'>
          <Button type='submit' variant="outlined" className='material-button text-end'>{loading ? "Processing..." : "Add project"}</Button>
        </div>
      </form>
    </div>
  )
}

export default NewProject