import React, { useState } from 'react';
import blackHoodie from '../images/blackhoodie.jpg';
import redHoodie from '../images/redhoodie.jpg';
import whiteHoodie from '../images/whitehoodie.jpg';
import blueHoodie from '../images/bluehoodie.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);

    return (
        <div className="container">
            <div className="image">
                <img src={blackHoodie} alt="Black Hoodie" />
                <h3>Black Hoodie</h3>
                <h3>₹1400</h3>
                <a onClick={() => props.addBasket('blackHoodie')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={redHoodie} alt="Red Hoodie" />
                <h3>Red Hoodie</h3>
                <h3>₹1600</h3>
                <a onClick={() => props.addBasket('redHoodie')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={whiteHoodie} alt="White Hoodie" />
                <h3>White Hoodie</h3>
                <h3>₹2000</h3>
                <a onClick={() => props.addBasket('whiteHoodie')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={blueHoodie} alt="Blue Hoodie" />
                <h3>Blue Hoodie</h3>
                <h3>₹1800</h3>
                <a onClick={() => props.addBasket('blueHoodie')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            
        </div>
    );
}

export default connect(null, { addBasket })(Home);