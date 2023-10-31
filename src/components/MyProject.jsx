import React from 'react'
import AddProjects from './AddProjects'

function MyProject() {
    return (
        <div className='card shadow mt-3 p-3'>
            <div className='d-flex align-items-center'>
                <h2>My Projects</h2>
                <div className='ms-auto'>
                    <AddProjects />
                </div>
            </div>
            <div className='mt-4'>
                {/* collection of user projects */}
                <div className="border d-flex align-items-center rounded p-2">
                    <h5>Project Title</h5>
                    <div className="icon ms-auto">
                        <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
                        <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
                        <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
                    </div>
                </div>
                <p className='text-danger fw-bolder fs-5 mt-3'>No Project Uploaded Yet!!!</p>
            </div>
        </div>
    )
}

export default MyProject