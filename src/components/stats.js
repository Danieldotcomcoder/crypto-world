import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../Redux/stocks/stockreducer';


export const Stats = () => {

    const dispatch = useDispatch()
    const stats  = useSelector((state) => state.stocks);
    useEffect(() => dispatch(fetchStats),[]);
     console.log(stats);

    return (
        <div className='main'>
         <h1>Stats Page</h1>
         
         { stats.map((item) => (
             <p> {item.total}</p>
         ))}
        </div>
    )
}