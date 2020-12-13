import React, { useState, useEffect} from 'react';
import './Stats.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StatsRow from './StatsRow.jsx';
import axios from 'axios';
import { db } from '../database/firebase';

const TOKEN = 'bv8cdvn48v6rnm7ashfg';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

let tempStockData =[]

const Stats = () => {

    const [stockData, setStockData] = useState([]);
    const [ myStocks, setMyStocks] = useState([]);  
    
    const getStockData = (stock) => {
      return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((error) => {
            console.error('Error', error.message);
        });
  };
    
    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc) => {
              let data = getStockData(doc.data().ticker)
              data  
              .then(res => {
                tempData.push({
                    id: doc.id,
                    data: doc.data(),
                    info: res.data
                })  
              })
            promises.push(data)
            })
            Promise.all(promises).then(() => {
              setMyStocks(tempData);
            })
        })
    }
     
    useEffect(() => {
      const stocksList = ['AAPL', 'MSFT', 'TSLA', 'FB', 'BABA', 'UBER', 'DIS', 'SBUX'];

      getMyStocks();
      let promises = [];
      stocksList.map((stock) => {
          promises.push(
            getStockData(stock)
            .then((res) => {
              tempStockData.push({
                name: stock,
                ...res.data
              })  
            })
          )    
      })
      
      Promise.all(promises).then(()=>{
          console.log(tempStockData);
          setStockData(tempStockData);
      }) 


    }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                    <MoreHorizIcon />
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                    {myStocks.map((stock) => (
                        <StatsRow
                            key={stock.data.ticker}
                            name={stock.data.ticker}
                            openPrice={stock.info.o}
                            shares={stock.data.shares}
                            price={stock.info.c}
                        />
                      ))}
                    </div>
                </div>
                <div className="stats__header stats__lists">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                      {stockData.map((stock) => (
                          <StatsRow
                            key={stock.name}
                            name={stock.name}
                            openPrice={stock.o}
                            price={stock.c}
                            />
                      ))}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
 