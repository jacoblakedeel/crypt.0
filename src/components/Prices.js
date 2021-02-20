import React, {useState, useEffect} from 'react';
import {Paper} from './Styles';
import Chart from './Chart'

const Prices = () => {

    const [cryptoData, setCryptoData] = useState([]);

    
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
                    <Chart/>
                </li>
    })

    return (
        <>
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
