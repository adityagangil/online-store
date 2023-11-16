import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
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

const Home = ({ addToCart }) => (
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
);

const Store = () => (
  <Container className="mt-4 text-center">
    <h1 className="mb-4">Store</h1>
    {/* Add store-specific content here */}
  </Container>
);

const About = () => (
  <Container className="mt-4 text-center">
    <h1 className="mb-4">About Us</h1>
    <img
      src="https://example.com/your-image-url.jpg"
      alt="About Us"
      style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '50%' }}
    />
    <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
      Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
  </Container>
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
          <Route path="/store" element={<Store />} />
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
