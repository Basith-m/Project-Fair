import React from 'react'
import { useState } from 'react';
import profileImg from '../Assets/profile-img.png'
import { Collapse } from 'react-bootstrap';

function Profile() {

    const [open, setOpen] = useState(false);

    const [userProfile,setUserProfile] = useState({
        username:"", 
        email:"", 
        password:"",
        github : "",
        linkedIn : ""
    })

  return (
    <div className='p-2 border border-1 mt-5 rounded'>
        <div className='d-flex  p-2 rounded justify-content-between align-items-center'>
            <h2>My Profile</h2>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info d-flex align-items-center'>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
        <Collapse in={open}>
            <div className='row justify-center p-4'>
                <label className='text-center'>
                    <input style={{display:'none'}} type="file" />
                    <img width={'200px'} height={'200px'} src={profileImg} className='rounded-circle' alt="Upload" />      
                </label>   
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='GitHub'/>
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='LinkedIn'/>
                </div>
                <div className='mt-3'>
                    <button style={{fontSize:'16px'}} className='btn btn-warning  p-2  w-100'>Upload</button>
                </div>
            </div>
        </Collapse>
    </div>
  )
}

export default Profile