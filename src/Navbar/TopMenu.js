import React from 'react'
import "./navbar.css";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";

function TopMenu() {

    return (
        <div>
            <div className="header">Employee Management</div>
            <div className="line"></div>
            <div className="navbar">
                <Navbar bg="light" expand="md">
                    <Container>

                        <Nav className="me-auto">
                            <NavLink to="/home">
                                Home
                            </NavLink>
                            <NavLink to="/add">
                                Add
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className="line"></div>

        </div>
    )
}
export default TopMenu;