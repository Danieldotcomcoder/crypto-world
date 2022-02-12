import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export const Stats = () =>  {
    const [stats, setStats] = useState(null)


    var statistics = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506'
        }
      };
       
       useEffect(() =>  { 
        Axios.request(statistics).then((response) =>
         response.data).then((result) => setStats(Object.entries(result.data)))
      
        },[]) // eslint-disable-line react-hooks/exhaustive-deps

        if (!stats) return null;
        console.log(stats);

  return (
    <div>
<div className='stats-table'>
<Table >
         <TableHeader>
      <TableRow >
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}} >Total Coins</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Total Markets</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Total Exchanges</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Total MarketCap</TableHeaderColumn>
        <TableHeaderColumn style={{color: 'black', fontSize: '2vh'}}>Total 24hVolume</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>{stats[0][1]}</TableRowColumn>
        <TableRowColumn>{stats[1][1]}</TableRowColumn>
        <TableRowColumn>{stats[2][1]}</TableRowColumn>
        <TableRowColumn>{stats[3][1]}</TableRowColumn>
        <TableRowColumn>{stats[4][1]}</TableRowColumn>
      </TableRow>
    </TableBody>
      </Table>  
      </div> 
        </div>
  )
}
