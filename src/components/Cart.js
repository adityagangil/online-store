// Cart.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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

export default Cart;
