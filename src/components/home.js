import React from 'react';
import axios from "axios";


export const Home = () => {
  const [post, setPost] = React.useState(null);
  var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
     params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506'
    }
  };
   React.useEffect(() =>
  axios.request(options).then((response) =>  response.data).then((result) => setPost(result.data.coins)));
   
console.log(post);
  
  return (
   
    <div>
      <h1>{post}</h1>
    </div>
  );
}

