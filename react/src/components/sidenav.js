import React from "react";
// import { Link } from "react-router-dom";
// import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
// import $ from "jquery";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Sidenav = (props) => {
  if(localStorage.getItem('admin')==='this is admin'){
    var email=localStorage.getItem('email');
    console.log(email);
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="*" expand={expand} className="mb-3" style={{marginTop:'-20px'}}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Admin Panel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/admin/category">Add category/subcategory/products</Nav.Link>
                  <Nav.Link href="/admin/setbanner">Set banner image</Nav.Link>
                  <Nav.Link href="/admin/allorders">Check All Orders</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );


    // return (
    //   <div style={{ display: 'flex', height: '100%' }}>
    //     <Sidebar>
    //       <Menu>
    //         <MenuItem> Documentation</MenuItem>
    //         <MenuItem> Calendar</MenuItem>
    //         <MenuItem> E-commerce</MenuItem>
    //       </Menu>
    //     </Sidebar>
    //     <main>
    //       <button onClick={() => collapseSidebar()}>Collapse</button>
    //     </main>
    //   </div>
    // );
};

export default Sidenav;
