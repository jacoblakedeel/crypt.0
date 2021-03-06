import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Paper} from './Styles';
import {HashLink as Link} from 'react-router-hash-link';
import {addCurrenciesToState} from '../actions/templateActions'
import Counter from './Counter';
import IndividualCrypto from './IndividualCrypto';

const Prices = (props) => {

    //local state variables
    const [individualCrypto, setIndividualCrypto] = useState([]);
    const [cryptoNews, setCryptoNews] = useState([]);
    const [showIndividualCrypto, setShowIndividualCrypto] = useState(false);

    


    //setting up dispatch variable
    const dispatch = useDispatch();


    //function for individual crypto click
    const handleClick = async (currency) => {
        let url = `http://cryptopanic.com/api/v1/posts/?auth_token=63d5283d91ad6afa1159e9fefcbe7b96fb529a86&kind=news&currencies=${currency.symbol}`
        let response = await fetch(url);
        let data = await response.json();
        setCryptoNews(data)
        console.log(data)

        setIndividualCrypto(currency)
        // console.log(currency)
        
        setShowIndividualCrypto(!showIndividualCrypto);
        
    }


    //begin api call for crypto prices
    useEffect(async()=>{
        
        let url = 'https://api.nomics.com/v1/currencies/ticker?key=04d4c28e8d2730d49fe6e0f015800b4e&interval=1d,30d&per-page=25&page=1&start=2018-04-14T00%3A00%3A00Z&end={date}&attributes=description'

        let response = await fetch(url);
        
        let data = await response.json();
        // console.log(data);

        const setCurrencies = () => dispatch(addCurrenciesToState(data))
        setCurrencies()
    }, [])
    const currencies = useSelector(state => state.currencies);

    let currenciesList = currencies.map((currency, index)=>{
        return <Link smooth to="/#individualCrypto" key={currency.id} onClick={()=>handleClick(currency)}>
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


    //mapping currencies for ticker
    let tickerList = currencies.map((currency, index)=>{
        return <div key={currency.id} className="ticker-item"><img src={currency.logo_url} height='20px'/> {currency.symbol}: ${Number.parseFloat(currency.price).toFixed(2)}</div>
    });
    
    //conditional render
    if(showIndividualCrypto){
        return <>
            <div id="individualCrypto" className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
                </div>
            </div>
            <a>
                <IndividualCrypto cryptoNews={cryptoNews.results} showIndividualCrypto={showIndividualCrypto} individualCrypto={individualCrypto} handleClick={handleClick}/>
            </a>
            <Counter/>
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
