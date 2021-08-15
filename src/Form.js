import React, { useState } from 'react';


import {
  CardImg,
  Card,
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  Button,
} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    sauce: false,
    pepperoni: false,
    mushrooms: false,
    olives: false,
    chicken: false,
    pineapple: false,
    bacon: false,
    special: '',
  });
  const schema = yup.object().shape({
    name: yup.string().required('name must be at least 2 characters').min(2),
    size: yup.string().required('please choose a size'),
    sauce: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    olives: yup.boolean(),
    chicken: yup.boolean(),
    pineapple: yup.boolean(),
    bacon: yup.boolean(),
  });
  const submit = () => {
    schema.validate(formData).then(() => {
      axios
        .post('https://reqres.in/api/orders', formData)
        .then((res) => {
          console.log('this is the form data', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleToppings = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Card color='danger'>
        <h2 style={{ color: 'white', margin: '0 auto' }}>Perfect Your Pizza</h2>

        <CardImg
          style={{ width: '70%', margin: '0 auto' , borderRadius: '20px', marginTop: '5px'}}
          src={
            'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' 
          }
          alt='pizza'
        
        />
      </Card>
      <Form
        id='pizza-form'
        style={{ margin: '5%', border: '2px solid red', padding: '5%' }}
        data-cy='submit'
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <FormGroup>
          <legend> Name </legend>
          <Input
            style={{ width: '50%' }}
            id='name-input'
            type='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            data-cy='name'
          />
        </FormGroup>
        <FormGroup style={{ marginTop: '10px' }}>
          <Dropdown toggle={toggle} isOpen={dropdownOpen}>
            <DropdownToggle caret color='danger'>
              {!formData.size ? 'choose a size' : formData.size}
            </DropdownToggle>
            <DropdownMenu id='size-dropdown'>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, size: 'Small' });
                }}
              >
                Small
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, size: 'Medium' });
                }}
              >
                Medium
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, size: 'Large' });
                }}
              >
                Large
              </div>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup tag='fieldset'>
          <legend>Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='sauce'
                value='pizza'
                onChange={handleChange}
              />
              Pizza
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='sauce'
                value='bbq'
                onChange={handleChange}
              />
              BBQ
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag='fieldset' className='checkboxes'>
          <legend>Toppings</legend>

          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='pepperoni'
                data-cy='checkbox1'
                checked={formData.pepperoni}
                onChange={handleToppings}
              />
              Pepperoni
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='mushrooms'
                data-cy='checkbox2'
                checked={formData.mushrooms}
                onChange={handleToppings}
              />
              Mushrooms
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='olives'
                data-cy='checkbox3'
                checked={formData.olives}
                onChange={handleToppings}
              />
              Green Olives
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='chicken'
                data-cy='checkbox4'
                checked={formData.chicken}
                onChange={handleToppings}
              />
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='pineapple'
                data-cy='checkbox5'
                checked={formData.pineapple}
                onChange={handleToppings}
              />
              Pineapple
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='bacon'
                data-cy='checkbox6'
                checked={formData.bacon}
                onChange={handleToppings}
              />
              Bacon
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <legend>Special Instructions </legend>
          <Input
            id='special-text'
            type='textarea'
            name='special'
            value={formData.special}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color='danger' id='order-button' style={{ marginTop: '10px' }}>
          Order
        </Button>
      </Form>
    </>
  );
};

export default OrderForm;
