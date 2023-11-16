import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Badge, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const productsArr = [
  {
    name: "Album 1",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    name: "Album 2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    name: "Album 3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    name: "Album 4",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductCard = ({ name, title, price, imageUrl, addToCart }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    {name}
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>${price}</Card.Text>
      <Button variant="primary" onClick={() => addToCart({ name, title, price, imageUrl })}>
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
);

// ... (other imports)

const Cart = ({ cartElements, removeFromCart, onHide }) => (
  <Modal show={true} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {cartElements.map((cartItem, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={cartItem.imageUrl} alt={cartItem.title} style={{ width: '50px', marginRight: '10px' }} />
          <div style={{ flex: 1 }}>
            <p>{cartItem.title}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p>${cartItem.price}</p>
              <Button variant="danger" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Modal.Body>
  </Modal>
);

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
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '30px', marginRight: '45vh' }}>The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{ fontSize: '30px', marginRight: '50px' }}>Home</Nav.Link>
              <Nav.Link href="#store" style={{ fontSize: '30px', marginRight: '50px' }}>Store</Nav.Link>
              <Nav.Link href="#about" style={{ fontSize: '30px', marginRight: '50px' }}>About</Nav.Link>
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

      <Container className="mt-4 text-center">
        <h1 className="mb-4">The Generics</h1>
        <Row>
          <Col>
            <h2 className="mb-4">Music</h2>
          </Col>
        </Row>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index}>
              <ProductCard {...product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      {isCartOpen && (
        <Container className="mt-4 text-center">
          <Cart cartElements={cartElements} removeFromCart={removeFromCart} onHide={() => setIsCartOpen(false)} />
        </Container>
      )}
    </div>
  );
}

export default App;
