import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchStocks } from '../Redux/stocks/stockreducer';
import '../App.css';


export const Home = () => {

const dispatch = useDispatch();

const data  = useSelector((state) => state.stocks);
useEffect(() => dispatch(fetchStocks),[]);


 console.log(data)
  return (
   
    <div className='main-div'>
  
      <ul className='card-div' >
    { data.map((item) => (
      <li key={item.uuid} className='card'>
        
        <Link to='/details' state={{ coin: item.uuid}}>
        <img className='coin-logo' alt='img' src={item.iconUrl} height='60px' width='60px' />
        </Link>
        <div className='coin-info'>
        <p className='coin-name'>{item.name}</p>
        <p className='coin-symbol'>{item.symbol}</p>
        <p className='coin-price'>{ Number(item.price).toFixed(5)} $</p>
        <p className='coin-price-change' style={{color: item.change>=0 ? '#0aec0a' : 'red'}}>{Number(item.change)} %</p>
        <div className='coin-sparkline'>
        <Sparklines  data={item.sparkline} limit={25} width={250} height={60}  >
        <SparklinesLine color='violet'/>
        </Sparklines>
        </div>    
        </div>
      </li>
    ))}</ul>
   
    </div>
    
  );
}

