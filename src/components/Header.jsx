import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,  Container } from 'react-bootstrap'

function Header() {
  return (
    // <div style={{backgroundColor:'#99ee90'}} className='position-fixed z-1 top-0 w-100'>
    //     <div className='container my-3'>
    //         <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center text-white fs-3 fw-bolder'>
    //           <i class="fa-brands fa-stack-overflow me-2"></i>Project Fair
    //         </Link>
    //     </div>
    // </div>

    <Navbar expand="lg" style={{backgroundColor:'#99ee90'}} className='p-3'>
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='text-white fs-3 fw-bold'>
            <i class="fa-brands fa-stack-overflow fa-bounce me-2"></i>Project Fair
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header