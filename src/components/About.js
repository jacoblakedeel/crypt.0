import React from 'react';
import {Paper} from './Styles';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3, faBootstrap, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import jacobPhoto from "../assets/jacob.jpeg"

const About = () => {

    const cryptos = useSelector(state => state.currencies);

    let tickerList = cryptos.map((currency, index)=>{
        return <div key={currency.id} className="ticker-item"><img src={currency.logo_url} height='20px'/> {currency.symbol}: ${Number.parseFloat(currency.price).toFixed(2)}</div>
    })



    return (
        <>  
            <div className="tcontainer row">
                <div className="ticker-wrap">
                    <div className="ticker-move mainFont">
                        {tickerList}
                    </div>
                </div>
            </div>

            <Paper className="mainFont mt-5 ml-5 paperCard3">
                <img src={jacobPhoto} height="200px"/>
                <div>Jacob Deel is a Junior Software Developer looking to shape the future...</div>
            </Paper>
            <Paper className="mt-5 ml-5 paperCard2">
                <a href="https://github.com/jacoblakedeel" target="_blank">
                    <FontAwesomeIcon className="ml-5" icon={faGithub} size="4x"/>
                    <h3>GitHub</h3>
                </a>
                <a href="https://www.linkedin.com/in/jacob-deel-093b401b9/" target="_blank">
                    <FontAwesomeIcon className="ml-5" icon={faLinkedin} size="4x"/>
                    <h3>Linkedin</h3>
                </a>
            </Paper>
            <Paper className="mainFont mt-5 ml-5 paperCard3">
                <h1>CRYPT.0 WAS CREATED USING</h1>
            </Paper>
            <Paper className="mt-5 ml-5 mainFont2 paperCard2 flex-wrap">
                <div className="row">
                    <div className="col-xs-3 col-sm-3">
                        <FontAwesomeIcon className="ml-5" icon={faReact} size="4x"/>
                        <h3>React</h3>
                    </div>
                    <div className="col-xs-3 col-sm-3">
                        <FontAwesomeIcon className="ml-5" icon={faCss3} size="4x"/>
                        <h3>CSS3</h3>
                    </div>
                    <div className="col-xs-3 col-sm-3">
                        <FontAwesomeIcon className="ml-5" icon={faJsSquare} size="4x"/>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="col-xs-3 col-sm-3">
                        <FontAwesomeIcon className="ml-5" icon={faBootstrap} size="4x"/>
                        <h3>BootStrap</h3>
                    </div>
                </div>
            </Paper> 
        </>
    )
}


export default About;
