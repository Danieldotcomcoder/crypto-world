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

const Stats = () => {
  const [stats, setStats] = useState(null);

  const statistics = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
    },
  };

  useEffect(() => {
    Axios.request(statistics)
      .then((response) => response.data).then((result) => setStats(result.data));
  }, []);
  if (!stats) return null;

  return (
    <div>
      <div className="stats-table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Coins</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Markets</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Exchanges</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total MarketCap</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total 24hVolume</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{stats.totalCoins}</TableRowColumn>
              <TableRowColumn>{stats.totalMarkets}</TableRowColumn>
              <TableRowColumn>{stats.totalExchanges}</TableRowColumn>
              <TableRowColumn>{stats.totalMarketCap}</TableRowColumn>
              <TableRowColumn>{stats.total24hVolume}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Stats;
