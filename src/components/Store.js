// Store.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

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

const Store = ({ addToCart }) => (
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

export default Store;
