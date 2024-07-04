import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function Navigation() {
//     return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="/dashboard">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/dashboard">Home</Nav.Link>
//               <Nav.Link href="/dashboard">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/dashboard">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="/dashboard">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/dashboard">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="/dashboard">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }

const AccountNav = () => {
  return (
    <div className='mb-5'>
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbar_main">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/account/settings">MasterData</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Run Reports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/account/drivers">Driver</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/account/mechanics">Mechanics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/account/stores">Store & Suppliers</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default AccountNav