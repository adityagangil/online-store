// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  const [cartElements, setCartElements] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartElements([...cartElements, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{ fontSize: '30px', marginRight: '45vh' }}>The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" exact style={{ fontSize: '30px', marginRight: '50px' }}>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/store" style={{ fontSize: '30px', marginRight: '50px' }}>Store</Nav.Link>
                <Nav.Link as={NavLink} to="/about" style={{ fontSize: '30px', marginRight: '50px' }}>About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  href="#cart"
                  style={{ fontSize: '30px', marginLeft: '40vh' }}
                  className="ml-auto"
                  onClick={() => setIsCartOpen(true)}
                >
                  Cart{' '}
                  <Badge variant="secondary">{cartElements.length}</Badge>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/store" element={<Store addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {isCartOpen && (
          <Container className="mt-4 text-center">
            <Cart cartElements={cartElements} removeFromCart={removeFromCart} onHide={() => setIsCartOpen(false)} />
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;
