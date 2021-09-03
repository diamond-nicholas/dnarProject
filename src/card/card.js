/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.scss';
const Card = () => {
  const [allMarket, setAllMarket] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getAllMarket = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setLoading(true);
      setAllMarket(res.data);
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMarket();
  }, []);
  console.log({
    // coins: allMarket,
  });

  if (error) return <h1>{error}</h1>;
  return (
    <div className='card'>
      {allMarket.slice(0, 4).map(({ id, name, symbol, current_price }) => (
        <div key={id} className='card'>
          <h2 className='htwo'>
            {`${name}`}({`${symbol}`})
          </h2>
          <div className='left-vals'>
            <p className='para'>+$192.89</p>
            <h2 className='amount htwo'>${`${current_price}`}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
