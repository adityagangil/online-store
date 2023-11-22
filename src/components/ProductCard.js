// ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

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

export default ProductCard;
