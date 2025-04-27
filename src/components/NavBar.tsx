// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="http://github.com/JohnIrle">
                John Irle
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://johnirle.com">Home</Nav.Link>
                    <Nav.Link href="https://johnirle.com#about">About</Nav.Link>
                    <Nav.Link href="https://johnirle.com#portfolio">
                        Portfolio
                    </Nav.Link>
                    <Nav.Link href="https://johnirle.com#contact">
                        Contact
                    </Nav.Link>
                    <Nav.Link href="https://johnirle.com/blog/">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
