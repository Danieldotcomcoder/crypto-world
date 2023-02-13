import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableHeader from '@material-ui/core/TableHeader';
// import TableHeaderColumn from '@material-ui/core/TableHeaderColumn'
import TableRow from '@material-ui/core/TableRow'
// import TableRowColumn from '@material-ui/core/TableRowColumn'

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
          {/* <TableHeader> */}
            <TableRow>
              {/* <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Coins</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Markets</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total Exchanges</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total MarketCap</TableHeaderColumn>
              <TableHeaderColumn style={{ color: 'black', fontSize: '2vh' }}>Total 24hVolume</TableHeaderColumn> */}
            </TableRow>
          {/* </TableHeader> */}
          <TableBody>
            <TableRow>
              {/* <TableRowColumn>{stats.totalCoins}</TableRowColumn>
              <TableRowColumn>{stats.totalMarkets}</TableRowColumn>
              <TableRowColumn>{stats.totalExchanges}</TableRowColumn>
              <TableRowColumn>{stats.totalMarketCap}</TableRowColumn>
              <TableRowColumn>{stats.total24hVolume}</TableRowColumn> */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Stats;
