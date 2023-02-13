import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import Table from 'material-ui/core/Table';
import TableBody from 'material-ui/core/TableBody';
import TableHeader from 'material-ui/core/TableHeader';
import TableHeaderColumn from 'material-ui/core/TableHeaderColumn'
import TableRow from 'material-ui/core/TableRow'
import TableRowColumn from 'material-ui/core/TableRowColumn'

  
const parse = require('html-react-parser');

const Details = () => {
  const [data, setData] = useState();

  const location = useLocation();
  const { coin } = location.state;

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
  if (!data) return null;

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
        <Table>
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
        </Table>
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
