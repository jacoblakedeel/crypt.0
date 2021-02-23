import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faSmile } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../actions/templateActions';

import React from 'react'

const Counter = () => {

    const likes = useSelector(state => state.numberLikes)

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(increment(1))

    }


    return (
        <>
            <div className="row">
                <div className="col-6 flex-center mt-3 mainFont">
                    <button onClick={handleClick} className="btn btn-transparent btn-link"><FontAwesomeIcon icon={faThumbsUp} inverse size="3x" flip="horizontal"/></button>
                    LIKE CRYPT.0? LET US KNOW
                </div>
                <div className="col-6 flex-center mt-4 mainFont">
                    <h4>{likes} People Like Us <FontAwesomeIcon icon={faSmile} size="2x"/></h4>
                </div>
            </div>
        </>
    )
}

export default Counter
