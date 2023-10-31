import React from 'react'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
      <Header  insideDashboard />
      <Row style={{marginTop:'100px'}} className='container-fluid px-4'>
        <Col sm={12} md={8}>
          <h1>Welcome <span className='text-warning'>User</span></h1>
          {/* my project */}
          <MyProject />
        </Col>
        <Col sm={12} md={4}>
          {/* my-profile */}
          <Profile />
        </Col>
      </Row>
    </>

  )
}

export default Dashboard