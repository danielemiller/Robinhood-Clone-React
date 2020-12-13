import React from 'react';
import './Stats.css';
import StockSVG from '../assets/images/stock.svg';
import { db } from '../database/firebase';

const StatsRow = (props) => {
    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

    const buyStock = () => {
      db.collection('myStocks')
      .where('ticker', '==', props.name)
      .get()
      .then((querySnapshot) => {
        if(!querySnapshot.empty){
          querySnapshot.forEach(function(doc) {
            db.collection('myStocks')
            .doc(doc.id)
            .update({
              shares: doc.data().shares += 1
            })
            console.log(doc.id, '=>', doc.data())
          })  
        } else {
          db.collection('myStocks')
          .add({
            ticker: props.name,
            shares: 1
          })
        }
      })
    }

    return (
        <div className="row" onClick={buyStock}>
          <div className="row__intro">
           <h1>{props.name}</h1>
           <p>{props.volume && (props.volume + 'shares')}</p>
          </div>  
          <div className="row__chart">
            <img src={StockSVG} height={16} alt=""/>
          </div>
          <div className="row__numbers">
            <p className="row__price">${props.price}</p>
            <p className="row__percent">+{Number(percentage).toFixed()}%</p>
          </div>   
        </div>
    )
}

export default StatsRow
 