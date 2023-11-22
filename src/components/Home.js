// Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const TourItem = ({ date, city, event }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000', marginBottom: '20px', padding: '10px 0' }}>
        <p style={{ flexBasis: '15%' }}>{date}</p>
        <p style={{ flexBasis: '30%' }}>{city}</p>
        <p style={{ flexBasis: '40%' }}>{event}</p>
        <Button variant="outline-dark" style={{ flexBasis: '15%', backgroundColor: 'skyblue' }}>Buy Tickets</Button>
    </div>
);

const Home = () => (
    <Container className="mt-4 text-center">
        <div style={{backgroundColor: '#ccc', border: '1px solid #000', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <h1 className="mb-4">The Generics</h1>
            <h2>Get our Latest Album</h2>
            <div style={{ border: '1px solid #000', borderRadius: '50%', width: '100px', height: '100px', margin: '20px auto' }}>
                <Button variant="outline-dark" size="lg" style={{ fontSize: '30px', width: '100%', height: '100%' }}>►</Button>
            </div>
        </div><br></br><br></br>

        <h2>TOURS</h2><br></br><br></br>
        <TourItem date="JUL 16" city="DETROIT, MI" event="DTE ENERGY MUSIC THEATRE" />
        <TourItem date="JUL 19" city="TORONTO, ON" event="BUDWEISER STAGE" />
        <TourItem date="JUL 22" city="BRISTOW, VA" event="JIGGY LUBE LIVE" />
        <TourItem date="JUL 29" city="PHOENIX, AZ" event="AK-CHIN PAVILION" />
        <TourItem date="AUG 2" city="LAS VEGAS, NV" event="T-MOBILE ARENA" />
        <TourItem date="AUG 7" city="CONCORD, CA" event="CONCORD PAVILION" />
    </Container>
);

export default Home;
