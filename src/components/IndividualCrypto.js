import React from 'react';
import {Paper} from './Styles';
import Chart from './Chart';
import {HashLink as Link} from 'react-router-hash-link';

const IndividualCrypto = (props) => {

        let newsList = (props.cryptoNews).map((article, index)=>{

            return  <a href={article.url} target="_blank" key={article.id}>
                        <ul className="mainFont mr-5">
                            <li>
                                <Paper className="mt-5 ml-5 mr-5 paperCard3">
                                    {article.title}
                                </Paper>
                            </li>
                        </ul>
                    </a>

        })

        return (
        <>
        <Link onClick={props.handleClick}>
            <Paper key={props.individualCrypto.id} className="mt-5 ml-5 mr-5 paperCard">
                <div className="row">
                    <div className="mainFont col"><img src={props.individualCrypto.logo_url} height='150px'/> <h2>{props.individualCrypto.name} ({props.individualCrypto.symbol})</h2></div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 mainFont">
                        <div className="mb-3">Current Price: ${Number.parseFloat(props.individualCrypto.price).toFixed(2)}</div>
                        <div>All-Time High: ${Number.parseFloat(props.individualCrypto.high).toFixed(2)}</div>
                    </div>
                    <div className="col-6 mainFont">
                        <div className="mb-3">Circulating Supply: {props.individualCrypto.circulating_supply}</div>
                        <div>Rank: #{props.individualCrypto.rank}</div>
                    </div>
                </div>
                <div className="mt-5">
                    <button onClick={props.handleClick}>Close</button>
                </div>
                {/* <div className="row">
                    <Chart percent={individualCrypto["1d"]?.price_change_pct} price={individualCrypto.price} allTime={individualCrypto.high}/>
                </div> */}
            </Paper>
        </Link> 
        <Paper className="mt-5 ml-5 mr-5 paperCard2 mainFont">
            <h1>Related News</h1>
        </Paper>        
        {newsList}
        </>
    )
}

export default IndividualCrypto
