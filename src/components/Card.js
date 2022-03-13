import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class Card extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="card">
        <Slider {...settings}>
        <div><img src='./bf.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src='./bf.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src="https://i.pinimg.com/736x/69/98/0d/69980d37b7a3cdbf02e541b11c33a2c9.jpg" alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src="https://i.pinimg.com/736x/69/98/0d/69980d37b7a3cdbf02e541b11c33a2c9.jpg" alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        {/* <div><img src={require('./images/005.PNG')} alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src={require('./images/006.PNG')} alt="Credit to Cristina Gottardi on Unsplash"/></div> */}
        </Slider>
      </div>
    );
  }
}

export default Card;