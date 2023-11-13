"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container, Nav, Navbar } from "react-bootstrap"

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
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Static</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dynamic</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/incr" active={pathname === "/incr"}>Incremental</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}