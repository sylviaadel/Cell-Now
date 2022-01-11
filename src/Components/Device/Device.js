import React, { useState } from "react";
import './Device.scss';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Device = (props) => {
  const [device, setDevice] = useState(props.device)

  function onItemChange(clonedItem){
    setDevice(clonedItem)
  }

  function buyNow(){
    props.updateCart(device)
  }

  return (
    <div key={device.id} className='Device'>
      <img src={device.url} alt={device.title}   />
      <h3><a href='#'>{device.title}</a></h3>
      <label>{device.price}</label>
      <InputGroup className="mt-2">
        <Button onClick={() => onItemChange({...device, quantity: device.quantity === 0 ? 0 :  device.quantity - 1})} variant="outline-secondary" id="button-addon1">
          -
        </Button>
        <FormControl
          onChange={event =>
            onItemChange(
              {
                ...device,
                quantity: event.target.value === '' ? 0 : event.target.value ,
              }
            )
          }
          aria-label="Quantity"
          aria-describedby="Quantity"
          value={device.quantity}
          type = "number"
        />
        <Button id="addItem" onClick={() => onItemChange({...device, quantity: device.quantity + 1})} variant="outline-secondary">
          +
        </Button>
      </InputGroup>
      <button className="primary-btn" onClick={buyNow}>Add to cart</button>
    </div>
  );
}

export default Device;
