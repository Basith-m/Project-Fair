import React from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCards from '../components/ProjectCards'

function Projects() {
  return (
    <>
      <Header />
      <div style={{marginTop:'100px'}}>
        <h1 className='text-center mb-3'>All Projects</h1>
        <div className='d-flex justify-content-center align-items-center w-100'>
          <div className='d-flex border w-50 rounded'>
            <input className='form-control' type="text" placeholder='search project by technology used' />
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90 p-3"></i>
          </div>
        </div>
        <Row className='mt-5'>
          <Col sm={12} md={6} lg={4}>
            <ProjectCards />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects