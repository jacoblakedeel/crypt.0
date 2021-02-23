import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Paper} from './Styles';
import {Link} from 'react-router-dom'
import {addCurrenciesToState} from '../actions/templateActions'
import Chart from './Chart';
import Counter from './Counter';
import IndividualCrypto from './IndividualCrypto';

const Prices = (props) => {

    const [individualCrypto, setIndividualCrypto] = useState([]);
    
    const [showIndividualCrypto, setShowIndividualCrypto] = useState(false);




    //function for individual crypto click
    const handleClick = (currency) => {
        
        setIndividualCrypto(currency)
        console.log(currency)
        
        setShowIndividualCrypto(!showIndividualCrypto);

        const date = new Date();
        // console.log(date)
        // console.log(individualCrypto["1d"])
    }
    

    const dispatch = useDispatch();
    
    React.useEffect(async()=>{
        let url = 'https://api.nomics.com/v1/currencies/ticker?key=04d4c28e8d2730d49fe6e0f015800b4e&interval=1d,365d&per-page=25&page=1&start=2018-04-14T00%3A00%3A00Z&end={date}&attributes=description'
        let response = await fetch(url);
        
        let data = await response.json();
        console.log(data);

        const setCurrencies = () => dispatch(addCurrenciesToState(data))
        setCurrencies()
    }, [])
    const currencies = useSelector(state => state.currencies);

    let currenciesList = currencies.map((currency, index)=>{
        return <Link to="/" key={currency.id} onClick={()=>handleClick(currency)}>
                    <li>
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
                </Link>
    });

    let tickerList = currencies.map((currency, index)=>{
        return <div key={currency.id} className="ticker-item"><img src={currency.logo_url} height='20px'/> {currency.symbol}: ${Number.parseFloat(currency.price).toFixed(2)}</div>
    });
    
    if(showIndividualCrypto){
        return <>
            <div className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
                </div>
            </div>
            <a id="individualCrypto">
                <IndividualCrypto showIndividualCrypto={showIndividualCrypto} individualCrypto={individualCrypto} handleClick={handleClick}/>
            </a>
            <Counter/>
        
        {/* <div className="row mt-5">
            <iframe className="col" width="80%" scrolling="yes" allowtransparency="true" frameBorder="0" src="https://cryptopanic.com/widgets/news/?bg_color=165430&amp;font_family=sans&amp;header_bg_color=165430&amp;header_text_color=FFFFFF&amp;link_color=F6F8FF&amp;news_feed=recent&amp;text_color=F6F8FF" height="350px"></iframe>
        </div> */}
        </>
    }
    else{
        return (
        <>  
            <div className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
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
            <Counter/>
        </>
        
    )
    }
    
}


export default Prices;
