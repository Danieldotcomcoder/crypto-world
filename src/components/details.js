import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
var parse = require('html-react-parser');



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
    
      },[])// eslint-disable-line react-hooks/exhaustive-deps
      if (!data) return null;
      data.splice(7,2)
      data.splice(17,1)
      
      console.log(data);
      
    return (
      
      <div>
        <Link className='back' to='/'>
          Back
        </Link>
        <ul>
       <li className='Coin-d-name' style={{color: data[4][1]}}> {data[2][1]} </li> 
       <li className='Desc-div'> { parse(data[3][1])} </li> 
       </ul>
       <div className='table-div'>
         <Table >
         <TableHeader>
      <TableRow >
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}} >Rank</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Tier</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Symbol</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Market Cap</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Price</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Price Change</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>24h Volume</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>{data[13][1]}</TableRowColumn>
        <TableRowColumn>{data[16][1]}</TableRowColumn>
        <TableRowColumn>{data[1][1]}</TableRowColumn>
        <TableRowColumn>{data[8][1]} $</TableRowColumn>
        <TableRowColumn>{Number(data[9][1]).toFixed(9)} $</TableRowColumn>
        <TableRowColumn >{data[12][1]} %</TableRowColumn>
        <TableRowColumn>{data[7][1]}</TableRowColumn>
      </TableRow>
    </TableBody>
      </Table>
      <div className='sparkline-details'>
      <Sparklines className='spk' style={{ fill: "none" }}  data={data[14][1]} limit={30} width={1000} height={120}  >
      <SparklinesLine color="black" />
      <SparklinesBars color="lightgrey" />
      <SparklinesReferenceLine type='max'/>
        </Sparklines>
      </div>
       </div>   
      </div>
    )
    
    
    }

  
