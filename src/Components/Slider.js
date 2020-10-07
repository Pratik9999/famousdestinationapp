
import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import '../styles/Slider.css';
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';

const Slider = () => {

   const myArrow = ({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? <img src={LeftArrow} alt="left-arrow" /> 
                                             : <img src={RightArrow} alt="rigth-arrow" />
      return (
        <button className="sliderBtn" onClick={onClick} disabled={isEdge}>
          {pointer}
        </button>
      )
   }

   return (
      <div className="slider_container"> 
         <h3>Best Places In USA</h3>
         <Carousel itemsToShow={3} renderArrow={myArrow} itemsToScroll={2}>  
            <div className="place">1</div>
            <div className="place">2</div>
            <div className="place">3</div>
            <div className="place">4</div>
            <div className="place">5</div>
            <div className="place">6</div>
            <div className="place">7</div>
            <div className="place">8</div>
            <div className="place">9</div>
            <div className="place">10</div>
         </Carousel>
      </div>
   );

}
 
export default Slider;