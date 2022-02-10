import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';

 export const Details = ()  => {
   const [data, setData] = useState(null)
  const location = useLocation();
  const { coin } = location.state
    var options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${coin}`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
      },
      headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
    }};
     
     useEffect(() =>  { 
      Axios.request(options).then((response) =>
       response.data).then((result) => setData(Object.entries(result.data.coin)))
    
      },[])
      if (!data) return null;
      data.splice(7,2)
      data.splice(12,2)
    
      console.log(data);
    return (
      
      <div>
      { data.map((item) => <li key={item[0]}>{item[0]} {item[1]} </li>) }
           
      </div>
    )
    
    
    }

  
