"use client"

import Link from "next/link"
import { Container, Nav, Navbar, NavbarToggle } from "react-bootstrap"

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect >
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Image Gallery
                </Navbar.Brand>
                <NavbarToggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" />
                <Nav>
                    <Nav.Link as={Link} href="/hi">Hi</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}