import React, { useState, useEffect } from "react";
import './CartPopupItem.scss';
import DeviceImg11 from '../../images/iphone11.png'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const CartPopupItem = (props) => {
const [item, setItem] = useState(props.item)

function onItemChange(clonedItem){
  setItem(clonedItem)
  props.quantityChanged(clonedItem)
}

useEffect(() => {
  if(props.item){
    setItem(props.item);
  }
}, [props.item]);


//   if(newNum === 0){
//     document.getElementById('item').remove();
//   }

  return (
    <div id='item' className='CartPopupItem'>
      <img src={item.url} alt='item'/>
      <div className="desc">
        <h3>{item.title}</h3>
        <label>{item.price}</label>
        <InputGroup className="mt-2">
          <Button onClick={() => onItemChange({...item, quantity: item.quantity === 0 ? 0 :  item.quantity - 1})} variant="outline-secondary" id="button-addon1">
            -
          </Button>
          <FormControl
             onChange={event =>
              onItemChange(
                {
                  ...item,
                  quantity: event.target.value === '' ? 0 : event.target.value ,
                }
              )
            }
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={item.quantity}
            type = "number"
          />
          <Button id="addItem" onClick={() => onItemChange({...item, quantity: item.quantity + 1})} variant="outline-secondary">
            +
          </Button>
        </InputGroup>
        <button className="remove-item" onClick={() => onItemChange({...item, quantity: 0})}>Remove</button>
      </div>
      <div className="clearfix" />
    </div>
  );
}

export default CartPopupItem;
