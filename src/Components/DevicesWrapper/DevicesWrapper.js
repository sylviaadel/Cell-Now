import React, { useState } from "react";
import './DevicesWrapper.scss';
import Device from '../Device/Device'
import DeviceImg11 from '../../images/iphone11.png'
import DeviceImg12 from '../../images/iphone12.png'
import DeviceImg12ProMax from '../../images/iphone12ProMax.png'
import DeviceImg11ProMax from '../../images/iphone11ProMax.png'
import { v4 as uuidv4 } from 'uuid';
import {DeviceModel as newDeviceModel} from "../../Models/DeviceModel.js";

function DevicesWrapper(props) {
  const [devices] = useState([{
    ...newDeviceModel,
    id:generateNewGuid(),
    title: 'Iphone 11', 
    price: 'SEK 5,010.00',
    url: DeviceImg11
  },{
    ...newDeviceModel,
    id:generateNewGuid(),
    title: 'Iphone 11 Pro Max', 
    price: 'SEK 10,760 ',
    url: DeviceImg11ProMax
  },{
    ...newDeviceModel,
    id:generateNewGuid(),
    title: 'Iphone 12', 
    price: 'SEK 10,358.00',
    url: DeviceImg12
  },{
    ...newDeviceModel,
    id:generateNewGuid(),
    title: 'Iphone 12 Pro Max', 
    price: 'SEK 8,560 ',
    url: DeviceImg12ProMax
  }]);

  function generateNewGuid() {
    return uuidv4();
  }

  function updateCart(device){
    props.updateCart(device)
  }

  return (
    <section className='DeviceWrapper'>
      {devices.map((device) => {
        return <Device updateCart={updateCart} device={device} />;
      })}
    </section>
  );
}

export default DevicesWrapper;
