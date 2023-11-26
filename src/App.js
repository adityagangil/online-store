// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import AuthForm from './components/AuthForm';

function App() {
  const [cartElements, setCartElements] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Add state to store user email

  useEffect(() => {
    // Simulate user login. Replace this with actual user authentication logic.
    setUserEmail("adityagangil2001@gmail.com");
  }, []);

  const addToCart = (product) => {
    // Update the local state
    setCartElements([...cartElements, { ...product, quantity: 1 }]);
    
    // Update the backend
    const sanitizedEmail = sanitizeEmail(userEmail);
    const endpoint = `/cart${sanitizedEmail}`;
    const apiUrl = `https://crudcrud.com/api/023a1271dfb94277b59c7978e34b9e9c${endpoint}`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems: [...cartElements, { ...product, quantity: 1 }] }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  const removeFromCart = (index) => {
    // Update the local state
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);

    // Update the backend
    const sanitizedEmail = sanitizeEmail(userEmail);
    const endpoint = `/cart${sanitizedEmail}`;
    const apiUrl = `https://crudcrud.com/api/YOUR_CRUD_API_KEY${endpoint}`;

    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems: updatedCart }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  const sanitizeEmail = (email) => {
    return email.replace(/\.|@/g, '');
  };

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{ fontSize: '30px', marginRight: '20vh' }}>The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" exact style={{ fontSize: '30px', marginRight: '50px' }}>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/store" style={{ fontSize: '30px', marginRight: '50px' }}>Store</Nav.Link>
                <Nav.Link as={NavLink} to="/about" style={{ fontSize: '30px', marginRight: '50px' }}>About</Nav.Link>
                <Nav.Link as={NavLink} to="/contactus" style={{ fontSize: '30px', marginRight: '50px' }}>ContactUs</Nav.Link>
                <Nav.Link as={NavLink} to="/login" style={{ fontSize: '30px', marginRight: '50px' }}>Login</Nav.Link>
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
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<AuthForm/>} />
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