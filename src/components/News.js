import React, { Component } from 'react';
import {Paper} from './Styles';
import Counter from './Counter';
import {connect} from 'react-redux';



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
        // console.log(data.results)

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


        let tickerList = (this.props.tickerList).map((currency, index)=>{
            return <div key={currency.id} className="ticker-item"><img src={currency.logo_url} height='20px'/> {currency.symbol}: ${Number.parseFloat(currency.price).toFixed(2)}</div>
        });

        return (
            <>
            <div className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
                </div>
            </div>
            <Paper className="mt-5 mb-5 ml-4 mr-4 paperCard">
                <div className="row mainFont">
                    <div className="col"><h1>Crypto News</h1></div>
                </div>
                
            </Paper>
            <ul>
                {newsList}
            </ul>
            <Counter/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        tickerList: state.currencies,
    }
}





export default connect(mapStateToProps, null)(News);
