import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Paper} from './Styles';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import {increment} from '../actions/templateActions'

const Prices = (props) => {

    const [cryptoData, setCryptoData] = useState([]);

    const likes = useSelector(state => state.numberLikes)

    
    React.useEffect(async()=>{
        let url = 'https://api.nomics.com/v1/currencies/ticker?key=04d4c28e8d2730d49fe6e0f015800b4e&interval=1d,30d&per-page=100&page=1'
        let response = await fetch(url);
        
        let data = await response.json();
        // console.log(data)
        setCryptoData(data)
        
    }, [])

    let currenciesList = cryptoData.map((currency, index)=>{
        return <li key={currency.id}>
                    <Paper className="mt-5 paperCard">
                        <div className="row mainFont">
                            <div className="col-xs-3 col-sm-1 col-md-1 col-lg-2 col-xl-2"><img src={currency.logo_url} height='50px'/></div>
                            <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3 col-xl-3">{currency.name} ({currency.symbol})</div>
                            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-4 col-xl-4">Now: ${Number.parseFloat(currency.price).toFixed(2)}</div>
                            <div className="col-xs-3 col-sm-5 col-md-5 col-lg-3 col-xl-3">All-Time: ${Number.parseFloat(currency.high).toFixed(2)}</div>
                        </div>
                    </Paper>
                    {/* <Chart/> */}
                </li>
    });

    let tickerList = cryptoData.map((currency, index)=>{
        return <div key={currency.id} className="ticker-item"><img src={currency.logo_url} height='20px'/> {currency.symbol}: ${Number.parseFloat(currency.price).toFixed(2)}</div>
    });

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(increment(1))

    }
    

    return (
        <>  
            <div className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 flex-center mt-3 mainFont">
                    <button onClick={handleClick} className="btn btn-transparent btn-link"><FontAwesomeIcon icon={faThumbsUp} inverse size="3x" flip="horizontal"/></button>
                    LOVE CRYPT.0? LET US KNOW
                </div>
                <div className="col-6 flex-center mt-4 mainFont">
                    <h1>{likes} People Like Us :)</h1>
                </div>
            </div>
            <ul>
                <Paper className="mt-5 paperCard">
                    <div className="row mainFont">
                        <div className="col"><h1>Movers & Shakers</h1></div>
                    </div>
                </Paper>
                {currenciesList} 
            </ul>
        </>
        
    )
}


export default Prices;
