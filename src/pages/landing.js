/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../card/card';

import DashboardLayout from '../layouts/dashboard.layout';
import Chart from '../components/Chart';

import './landing.scss';

import axios from 'axios';

const Landing = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const getAllCoins = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/list'
      );
      setLoading(true);
      setAllCoins(res.data);
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts');
    } finally {
      setLoading(false);
    }
  };

  const getAllEvents = async () => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/events');
      setLoading(true);
      setAllEvents(res.data);
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEvents();
    getAllCoins();
  }, []);
  console.log({
    event: allEvents,
  });

  if (error) return <h1>{error}</h1>;

  return (
    <DashboardLayout>
      <div className='main'>
        <div className='searchField'>
          <img src='/vectors/search.svg' alt='search' className='search' />
          <input placeholder='search' className='input' />
        </div>

        <div className='main-area'>
          <div className='market'>
            <div className='market-area'>
              <h2 className='heading2'>Market leaders</h2>
              <div className='cards'>
                <Card />
              </div>
            </div>
          </div>
          <div className='event-area'>
            <div className=''>
              <h2 style={{ color: 'white' }}>Event</h2>
            </div>

            <div className='cards event-cards'>
              <div className='card-new'>
                {allEvents.data?.map(({ title, description }) => (
                  <div key={title} className='card'>
                    <h2 className='card-heading'>{`${title}`}</h2>
                    <div className='body-container'>
                      <p className='card-body'>
                        {`${description}`.slice(0, 100)}
                      </p>
                      <img
                        src='/vectors/link.svg'
                        alt='links'
                        className='link-svg'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='coins-area'>
            <h2 style={{ color: 'white' }}>All Coins</h2>
            <div className='cards'>
              {allCoins.slice(0, 8).map(({ id, name, symbol }) => (
                <div key={id} className='card'>
                  <h2 style={{ color: 'white' }}>{`${name} (${symbol})`}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='fig2'>
          <div className='topfield'>
            <div className='searchField'>
              <img src='/vectors/search.svg' alt='search' className='search' />
              <input placeholder='search' className='input' />
            </div>
            <div className='searchFieldNew'>
              <img
                src='/vectors/calendar.svg'
                alt='calendar'
                className='search'
              />
              <input type='date' className='input' />

              <img src='/vectors/arrow.svg' alt='arrow' className='search' />
            </div>
          </div>
          <div className='fig2area'>
            <div className='left'>
              <div className='chart-card'>
                <Chart />
              </div>
            </div>
            <div className='right'>
              <div className='heading'>
                <h2>Info Cards</h2>
                <img src='vectors/btc.svg' alt='' />
              </div>
              <div className='desc-card'>
                <h2>Description:</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium est neque non impedit magnam reiciendis quam fugit,
                  tempora alias accusamus ipsum earum eius in rem possimus
                  eveniet ratione! Ratione, molestiae!
                </p>
              </div>
              <div className='icon-card'>
                <div className='web-icon'>
                  <p>Website</p>
                  <img src='/vectors/web.svg' alt='web' />
                </div>
                <div className='reddit'>
                  <img src='/vectors/reddit.svg' alt='reddit' />
                </div>
                <div className='git'>
                  <img src='/vectors/git.svg' alt='' />
                </div>
              </div>
              <div className='facts'>
                <div className='fact-head'>
                  <h2>Facts</h2>
                </div>
                <hr style={{ color: '#8254f5' }} className='border' />
                <div className='fact-content'>
                  <div className='cont-one'>
                    <p>Hashing Algorithm</p>
                    <p>SHA-256</p>
                  </div>
                  <div className='cont-two'>
                    <p>Country Origin</p>
                    <p>Unknown</p>
                  </div>
                  <div className='cont-three'>
                    <p>Category</p>
                    <p>Cryptocurrency</p>
                  </div>
                </div>
              </div>
              <div className='total-card'>
                <div className='total-one'>
                  <p>Total Supply</p>
                  <p>21000000.0</p>
                </div>
                <div className='total-two'>
                  <p>Max Supply</p>
                  <p>21000000.0</p>
                </div>
                <div className='total-three'>
                  <p>Circulating</p>
                  <p>18761950.0</p>
                </div>
              </div>
            </div>
            <div className='bottom-card'>
              <div className='exchange-card'>
                <div className='head'>
                  <h2>Exchange</h2>
                </div>
                <div className='sell'>
                  <div className='left'>
                    <p>Sell</p>
                    <h2>6700</h2>
                  </div>
                  <div className='right'>
                    <div className='arrow-icon'>
                      <p>USD</p>
                      <img src='/vectors/arrow.svg' alt='web' />
                    </div>
                  </div>
                </div>
                <div className='sell'>
                  <div className='left'>
                    <p>Buy</p>
                    <h2>0.609898</h2>
                  </div>
                  <div className='right'>
                    <div className='arrow-icon'>
                      <p>BTC</p>
                      <img src='/vectors/arrow.svg' alt='web' />
                    </div>
                  </div>
                </div>

                <div className='sell'>
                  <div className='left convert'>
                    <p>1 BTC = 8343,43 USD</p>
                    <div className='right ex-arrow'>
                      <p>Exchange</p>
                      <img src='/vectors/rightarr.svg' alt='right-arrow' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='alexa-card'>
                <div className='alexa-head'>
                  <h2>Alexa Rank</h2>
                  <p>9440</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Landing;
