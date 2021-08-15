import React from 'react';
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';


const App = () => {
  return (
    <>
      <Navbar color='danger'>
        <h1 style={{ color: 'white', margin: '5px' }}>Pizza Place</h1>
        <Link to={'/'}>
          <Button
            id='order-pizza'
            color='danger'
            style={{ marginRight: '5px' }}
          >
            Home
          </Button>
        </Link>
      </Navbar>
      <Route exact path='/'>
        <Card>
          <CardImg
            src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            alt='pizza'
          />
          <Link to={'/pizza'}>
            <Button
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: '15px',
                textShadow: '1px 1px black',
                backgroundColor: 'white',
                color: 'red',
                borderRadius: '15px',
               
            
              }}
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
