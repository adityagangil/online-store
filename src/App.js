import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
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

const ProductCard = ({ name, title, price, imageUrl }) => (
  
  <Card style={{ width: '18rem', margin: '10px' }}>
    {name}
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>${price}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
);

function App() {
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
              <Nav.Link href="#cart" style={{ fontSize: '30px', marginLeft: '40vh' }} className="ml-auto">Cart</Nav.Link>
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
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default App;