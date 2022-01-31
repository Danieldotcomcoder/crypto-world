import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../Redux/stocks/stockreducer';



export const Home = () => {

const dispatch = useDispatch();
useEffect(() => dispatch(fetchStocks),[dispatch]);
let result = useSelector((state) => state.stocks);
 console.log(result);
  return (
   
    <div>
     { result.map((item) => (<h2 key={item.uuid}>{item.price}</h2>))}
    </div>
  );
}

