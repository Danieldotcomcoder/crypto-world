import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../Redux/stocks/stockreducer';



export const Home = () => {

const dispatch = useDispatch();

const data  = useSelector((state) => state.stocks);
useEffect(() => dispatch(fetchStocks),[dispatch]);
 
  return (
   
    <div className='main-div'>
      
      <div className='card-div'>
    { data.map((item) => (<ul key={item.uuid}>
      <li>
        <img alt='img' src={item.iconUrl} height='50px' width='50px' />
        <p>{item.symbol}</p>
        <p>{item.name}</p>
        <p>{item.price} $</p>
        <p>{item.change} %</p>
      </li>
    </ul>))}
   
    </div>
    </div>
  );
}

