import Axios from 'axios';

const initialState = [];

export const LOAD_STOCKS = 'GET_STOCKS';

export const loadAllStocks = (payload) => ({
  type: LOAD_STOCKS,
  payload,
});

export const fetchStocks = (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '100',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
    },
  };
  const result = Axios.request(options).then((response) => response.data)
    .then((result) => dispatch(loadAllStocks(result.data.coins)));

  return result;
};

const Stocksreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STOCKS:
      return action.payload;
    default:
      return state;
  }
};

export default Stocksreducer;
