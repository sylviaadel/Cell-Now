import React, { useState, useEffect } from "react";
import './Header.scss';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import CartPopupItem from "../CartPopupItem/CartPopupItem";
import Badge from 'react-bootstrap/Badge'

function Header(props) {
  const [ show, setShow ] = useState(false);
  const [cartItems, setCartItems] = useState(props.cart);
  function GetTotalItemsQuantity(){
    if(cartItems.length > 0){
      let count = 0;
      for (let i = 0; i < cartItems.length; i++) {
        count += cartItems[i].quantity;
      }
      return count;
    }
    return 0;
  }

  useEffect(() => {
    if(props.cart.length > 0){
      setCartItems(props.cart);
      GetTotalItemsQuantity();
    }
  }, [props.cart]);

  function quantityChanged(updatedItem){
    debugger;
    let clonedItems = [...cartItems];
    if(updatedItem.quantity === 0){
      clonedItems = clonedItems.filter((item) => { return item.id !== updatedItem.id});
    }

    else{
      clonedItems = clonedItems.map((item) => { return item.id === updatedItem.id ? {...item, quantity: updatedItem.quantity} : item });
    }
    setCartItems(clonedItems);
  }

  return (
    <header>
        <h1>
            <img src={logo} alt='logo' />
            CellNow
        </h1>
        
        <Dropdown show = {show}>
          <Dropdown.Toggle onClick = {() => setShow(!show)} className='cart-btn' id="dropdown-basic">
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge bg="secondary">{GetTotalItemsQuantity()}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
            {cartItems.length > 0 ? cartItems.map((item) => <CartPopupItem quantityChanged={quantityChanged} key={item.id} item={item} />) : 
        <p>
          Please Select a Product First !
        </p>
      }
            </Dropdown.Item>
            <Dropdown.Item className='checkout-btn'>
              <button>Checkout</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </header>
  );
}

export default Header;
