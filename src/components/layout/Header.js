import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="row sticky-top mainFont bgHeader">
            <div className="col-xs-1 col-sm-4 col-md-5 col-lg-6 col-xl-7">
            <Link className="nav-link active" id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">CRYPT.0</Link>
            </div>
            <div className="col-xs-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">
                <ul className="nav justify-content-end" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link active" id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">Crypto Prices</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" id="profile-tab" data-toggle="tab" to="/news" role="tab" aria-controls="profile" aria-selected="false">Crypto News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" id="contact-tab" data-toggle="tab" to="/about" role="tab" aria-controls="contact" aria-selected="false">About</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Header;
