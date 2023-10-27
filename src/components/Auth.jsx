import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import loginImg from '../Assets/login-img.jpg'

function Auth({register}) {
    const isRegisterForm = register ? true : false
  return (
    <div style={{width:'100',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
            <Link to={'/'} style={{textDecoration:'none', color:'blue'}}><i class="fa-solid fa-arrow-left"></i>Back to home</Link>
            <div className='card shadow p-5 bg-success'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 d-flex'>
                        <img style={{width:'400px'}} src={loginImg} className='img-fluid' alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <div className="d-flex align-items-center flex-column">
                            <h1 className='fw-bolder text-light mt-2'>
                                <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
                            </h1>
                            <h5 className='fw-bolder mt-2 pb-3 text-light'>
                                {
                                    isRegisterForm ? 'Sign Up to your Account' : 'Sign In to your Account'
                                }
                            </h5>
                            <Form className='text-light w-75'>
                                {
                                    isRegisterForm &&
                                    <Form.Group className="mb-3" controlId="formUserName">
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>
                                }
    
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Email ID" />
                                </Form.Group>
    
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Password" />
                                </Form.Group>
                            
                                {
                                    isRegisterForm ? 
                                    <div>
                                        <button className='btn btn-light mb-2'>Register</button>
                                        <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                                    </div> :
                                    <div>
                                    <button className='btn btn-light mb-2'>Login</button>
                                    <p>New User? Click here to <Link to={'/register'} className='text-primary'>Register</Link></p>
                                </div>
                                }
    
                            </Form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Auth