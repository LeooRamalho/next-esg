import { Nav, Navbar, Container } from "react-bootstrap"

const CustomNavbar = () => (
    <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Next - ESG</Navbar.Brand>
        </Container>
    </Navbar>
)

export default CustomNavbar