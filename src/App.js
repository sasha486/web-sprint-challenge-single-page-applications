import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';


const App = () => {
  return (
    <>
      <Navbar color='danger'>
        <h1 style={{ color: 'white' }}>Pizza Place</h1>
        <Link to={'/'}>
          <Button id='order-pizza' color='danger'>
            Home
          </Button>
        </Link>
      </Navbar>
      <Route exact path='/'>
        <Card>
          <CardImg src={require('./assets/pizza.jpg')} />
          <Link to={'/pizza'}>
            <Button
              color='danger'
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            >
              Get Some Pizza!
            </Button>
          </Link>
        </Card>
      </Route>
      <Route path='/pizza'>
        <OrderForm />
      </Route>
    </>
  );
};
export default App;
