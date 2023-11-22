import React, { useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { UserProjectsAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyProject() {

    const [userProjects, setUserProjects] = useState([])

    const getUserProjects = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-type": "application/json", "Authorization": `Bearer ${token}`
            }
            const result = await UserProjectsAPI(reqHeader)
            if (result.status === 200) {
                setUserProjects(result.data)
            }
            else {
                console.log(result);
                toast.warning(result.response.data)
            }
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [])

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
                {userProjects?.length > 0?userProjects.map(project => (
                    <div className="border d-flex align-items-center rounded p-2 mb-2">
                        <h5>{project.title}</h5>
                        <div className="icon ms-auto">
                            <button className='btn'><i class="fa-solid fa-pen-to-square fs-5"></i></button>
                            <a href={`${project.github}`} className='btn' target='_blank'><i class="fa-brands fa-github fs-5"></i></a>
                            <button className='btn'><i class="fa-solid fa-trash fs-5"></i></button>
                        </div>
                    </div>
                ))
                :
                <p className='text-danger fw-bolder fs-5 mt-3'>No Project Uploaded Yet!!!</p>
                }

            </div>
            <ToastContainer
                position="top-center"
                theme="colored"
            />
        </div>
    )
}

export default MyProject