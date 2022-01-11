import React, { useState } from "react";
import './App.scss';
import './Components/Header/Header'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SideNav from './Components/SideNav/SideNav'
import DevicesWrapper from './Components/DevicesWrapper/DevicesWrapper';

function App() {

  const [cart, setCart] = useState([]);

  function updateCart(device){
    debugger;
    var cartCloned = [...cart]
    if(cartCloned.length === 0){
      cartCloned.push(device);
    }

    else{
      let deviceExist = cartCloned.find(item => item.id === device.id);
      if(deviceExist){
        if(device.quantity === 0){
          cartCloned = cartCloned.filter(item => item.id !== device.id);
        }

        else{
          deviceExist.quantity = device.quantity;
          cartCloned = cartCloned.map((item) => { return item.id === device.id ? deviceExist : item });
        }

        
      }

      else{
        cartCloned.push(device);
      }
    }
    setCart(cartCloned);
  }

  return (
    <>
    <Header cart={cart} />
    <Banner />
    <div className='main-content'>
      <SideNav />
      <DevicesWrapper updateCart={updateCart} />
    </div>
   </>
  );
}

export default App;
