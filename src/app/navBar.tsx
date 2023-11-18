"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"

export default function NavBar() {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect >
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Image Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" >
                    <Nav>
                        <Nav.Link as={Link} href="/settimeout" active={pathname === "/settimeout"}>SetTimeout</Nav.Link>
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Static</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dynamic</Nav.Link>
                        <Nav.Link as={Link} href="/incr" active={pathname === "/incr"}>Incremental</Nav.Link>
                        <NavDropdown title="topics" id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/coding">coding</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/apples">apples</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}