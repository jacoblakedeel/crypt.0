import React, { Component } from 'react';
import {Paper} from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class News extends Component {


    constructor() {
        super();

        this.state = {
            news: []
        }
    }


    componentDidMount = async() => {
        let url = 'http://cryptopanic.com/api/v1/posts/?auth_token=63d5283d91ad6afa1159e9fefcbe7b96fb529a86&kind=news'

        let response = await fetch(url);

        let data = await response.json();
        console.log(data.results)

        this.setState({
            news: data.results
        })
    }




    render() {

        const {news} = this.state;

        let newsList = news.map((article, index)=>{
            return <li key={article.id}>
                        <a href={article.url} target="_blank">
                            <Paper className="mt-5 paperCard mainFont">
                                <div>{article.title}</div>
                            </Paper>
                        </a>
                    </li>
        })



        return (
            <>
            {/* <Paper className="mt-5 paperCard">
                <div className="row mainFont">
                    <div className="col">Which (If Any) of These Cryptos Do You Own?</div>
                </div>
                <div>
                    <div className="row mainFont mt-3">
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Bitcoin</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Ethereum</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>ChainLink</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>DogeCoin</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Binance Coin</div>
                    </div>
                    <div className="row mainFont mt-3">
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Ripple</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Litecoin</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Wrapped Bitcoin</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>HEX</div>
                        <div className="col-xs-2"><input className="mr-3" type="radio"/>Monero</div>
                    </div>
                    <button className="mt-3 mb-3" type="submit">Submit</button>
                </div>
                
            </Paper> */}
            <Paper className="mt-5 ml-4 mr-4 paperCard">
                <div className="row mainFont">
                    <div className="col"><h1>Crypto News</h1></div>
                </div>
            </Paper>
            <ul>
                {newsList}
            </ul>
            </>
        )
    }
}

export default News;
