import React from 'react';
import {Paper} from './Styles';

const IndividualCrypto = (props) => {

        return (
        <>
        <a onClick={props.handleClick}>
            <Paper key={props.individualCrypto.id} className="mt-5 ml-5 mr-5 paperCard">
                <div className="row">
                    <div className="mainFont col"><img src={props.individualCrypto.logo_url} height='150px'/> <h2>{props.individualCrypto.name} ({props.individualCrypto.symbol})</h2></div>
                </div>
                <div className="row">
                    <div className="col-6 mainFont">
                        <div>Current Price: ${Number.parseFloat(props.individualCrypto.price).toFixed(2)}</div>
                        <div>All-Time High: ${Number.parseFloat(props.individualCrypto.high).toFixed(2)}</div>
                    </div>
                    <div className="col-6 mainFont">
                        <div>Circulating Supply: {props.individualCrypto.circulating_supply}</div>
                        <div>Rank: {props.individualCrypto.rank}</div>
                    </div>
                </div>
                {/* <div className="row">
                    <Chart percent={individualCrypto["1d"]?.price_change_pct} price={individualCrypto.price} allTime={individualCrypto.high}/>
                </div> */}
            </Paper>
        </a>
            
        </>
    )
 
}

export default IndividualCrypto
