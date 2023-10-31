import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

function Header({ insideDashboard }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#99ee90' }} className='position-fixed z-1 top-0 w-100 p-3'>
      <Container>
        <Navbar.Brand className='text-white fs-3 fw-bold'>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} >
            <i class="fa-brands fa-stack-overflow fa-bounce me-2"></i>Project Fair
          </Link>
        </Navbar.Brand>
        {
          insideDashboard &&
          <button style={{textDecoration:'none'}} className='btn btn-link text-info fs-5 fw-bold text-capitalize'>
            Logout <i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade ms-2"></i>
          </button>
        }

      </Container>
    </Navbar >
  )
}

export default Header