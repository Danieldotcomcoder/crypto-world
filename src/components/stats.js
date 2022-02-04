import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../Redux/stocks/stockreducer';


export const Stats = () => {

    const dispatch = useDispatch()
    const stats  = useSelector((state) => state);
    useEffect(() => dispatch(fetchStats),[dispatch]);
     console.log(stats);

    return (
        <div>

        </div>
    )
}