// ContactUs.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize Firebase with only the databaseURL
    const firebaseConfig = {
      databaseURL: "https://online-store-a1af5-default-rtdb.firebaseio.com/",
    };

    console.log('Initializing Firebase...');
    const firebaseApp = initializeApp(firebaseConfig);
    console.log('Firebase initialized:', firebaseApp);

    // Create a reference to the database
    const database = getDatabase(firebaseApp);
    const contactUsRef = ref(database, 'contactUs');
    console.log('Database reference created:', contactUsRef);

    // Store the form data in Firebase
    push(contactUsRef, formData);
    console.log('Form data pushed to Firebase:', formData);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
    });

    alert('Form submitted successfully!');
  };

  return (
    <Container className="mt-4 text-center">
      <h1 className="mb-4">Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group><br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
