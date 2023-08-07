import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react-redux'
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  const cartProducts=useSelector((state)=>state.cart)

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link}>
              Product
            </Nav.Link>

          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                {/* add cart {cartProducts.length} */}
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartProducts.length} color="secondary">
                 <ShoppingCartIcon />
                 </StyledBadge>
                  </IconButton>
   
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
        </Navbar>
 
  )
}

export default Header
