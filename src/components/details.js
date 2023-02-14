import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import parse from 'html-react-parser';


const Details = () => {
  const [data, setData] = useState();

  const location = useLocation();
  const { coin } = location.state;
  function createData(rank, tier, symbol, marketcap,price,volume) {
    return { rank, tier, symbol, marketcap,price,volume};
  }
  

  const fetchcoindata = async () => {
    const options = {
      method: 'GET',

      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
      },
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
      },
    };
    await fetch(`https://coinranking1.p.rapidapi.com/coin/${coin}`, options)
      .then((res) => res.json())
      .then((info) => setData(info.data.coin));
  };
  useEffect(() => {
    fetchcoindata();
    
  }, []);
 
  var rows = [];
  if (!data) return null;
  else {
    rows = [
      createData(data.rank, data.tier, data.symbol, data.marketCap, data.price, data["24hVolume"]),
    ];
  }
  return (
    <div>
      <Link className="back" to="/">
        Back
      </Link>
      <ul>
        <li className="Coin-d-name" style={{ color: data.color }}>
          {' '}
          {data.name}
          {' '}
        </li>
        <li className="Desc-div">
          {' '}
          {parse(data.description)}
          {' '}
        </li>
      </ul>
      <div className="table-div">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Tier</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.tier}</TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.marketcap}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {/* <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                Rank
              </TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                Tier
              </TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                Symbol
              </TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                Market Cap
              </TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                Price
              </TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>
                24h Volume
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{data.rank}</TableRowColumn> 
              <TableRowColumn>{data.tier}</TableRowColumn>
              <TableRowColumn>{data.symbol}</TableRowColumn>
              <TableRowColumn>
                 {data.marketCap} 
                {' '}
                $
              </TableRowColumn>
              <TableRowColumn>
                {Number(data.price).toFixed(6)}
                {' '}
                $
              </TableRowColumn>
              <TableRowColumn>{Number(data["24hVolume"])}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table> */}
        <div className="sparkline-details">
          <Sparklines className="spk" style={{ fill: 'none' }} data={data.sparkline} limit={30} width={1000} height={120}>
            <SparklinesLine color="black" />
            <SparklinesBars color="lightgrey" />
            <SparklinesReferenceLine type="max" />
            <SparklinesSpots />
          </Sparklines>
        </div>
      </div>
    </div>
  );
};

export default Details;
