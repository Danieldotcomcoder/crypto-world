import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Stats = () => {
  function createData(
    TotalCoins,
    TotalMarkets,
    TotalExchanges,
    TotalMarketCap,
    Total24hVolume
  ) {
    return {
      TotalCoins,
      TotalMarkets,
      TotalExchanges,
      TotalMarketCap,
      Total24hVolume,
    };
  }

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
      .then((response) => response.data)
      .then((result) => setStats(result.data));
  }, []);
  var rows = [];
  if (!stats) return null;
  else {
    rows = [ createData(
      stats.totalCoins,
      stats.totalMarkets,
      stats.totalExchanges,
      stats.totalMarketCap,
      stats.total24hVolume
    )];
    console.log(stats);
  }

  return (
    <div>
      <div className="stats-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Total Coins</TableCell>
                <TableCell align="right">Total Markets</TableCell>
                <TableCell align="right">Total Exchanges</TableCell>
                <TableCell align="right">Total MarketCap</TableCell>
                <TableCell align="right">Total 24h Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.TotalCoins}
                >
                  <TableCell align="right">
                    {row.TotalCoins}
                  </TableCell>
                  <TableCell align="right">{row.TotalMarkets}</TableCell>
                  <TableCell align="right">{row.TotalExchanges}</TableCell>
                  <TableCell align="right">{row.TotalMarketCap} $</TableCell>
                  <TableCell align="right">{row.Total24hVolume} $</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Stats;
