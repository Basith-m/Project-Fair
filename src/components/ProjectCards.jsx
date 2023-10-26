import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import projectPic from '../Assets/project1.png'
import { Row,Col } from 'react-bootstrap'

function ProjectCards() {

    const [show,setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <>
        <Card className='shadow mb-5 btn' onClick={handleShow}>
        <Card.Img variant="top" src={projectPic} />
        <Card.Body>
            <Card.Title>Project Title</Card.Title>
        </Card.Body>
        </Card>

        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:'200px'}} src={projectPic} alt="" />
                </Col>
                <Col md={6}>
                    <h2>Video App</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias dolorum odio dignissimos magnam culpa facilis, repudiandae incidunt dolores minima ad perspiciatis nesciunt sapiente commodi esse suscipit fugiat voluptatibus autem</p>
                    <p>Languages Used : <span className='fw-bold'>HTML,CSS,BOOTSTRAP,REACT</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a className='me-3 btn' href="https://github.com/Basith-m/video-app.git" target='_blank'>
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
                <a className='me-3 btn' href="https://react-my-video-app.netlify.app" target='_blank'>
                    <i class="fa-solid fa-link fa-2x"></i>
                </a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCards