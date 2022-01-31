import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats, fetchStocks } from '../Redux/stocks/stockreducer';



export const Home = () => {

const dispatch = useDispatch();
useEffect(() => dispatch(fetchStocks),[dispatch]);
useEffect(() => dispatch(fetchStats), [dispatch])

let data = useSelector((state) => state.stocks);
 console.log(data);
 
  return (
   
    <div>
     {/* { coins.map((item) => (<div key={item.uuid}>
       <ul><img alt='img' src={item.iconUrl} height='50px' width='50px'></img></ul>
       
     </div>))} */}
    </div>
  );
}

