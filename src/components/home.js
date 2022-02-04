import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../Redux/stocks/stockreducer';
import '../App.css';


export const Home = () => {

const dispatch = useDispatch();

const data  = useSelector((state) => state.stocks);
useEffect(() => dispatch(fetchStocks),[dispatch]);
 console.log(data)
  return (
   
    <div className='main-div'>
      
      <div >
      <ul className='card-div' >
    { data.map((item) => (
      <li key={item.uuid} className='card'>
        <img className='coin-logo' alt='img' src={item.iconUrl} height='60px' width='60px' />
        <div className='coin-info'>
        <p className='coin-name'>{item.name}</p>
        <p className='coin-symbol'>{item.symbol}</p>
        <p className='coin-price'>Price: { Number(item.price).toFixed(5)} $</p>
        <p className='coin-price-change'>Price Change: {Number(item.change)} %</p>
        </div>
      </li>
    ))}</ul>
   
    </div>
    </div>
  );
}

