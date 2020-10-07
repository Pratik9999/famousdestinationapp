import React from 'react';
import '../styles/Place.css';
import Star from '../images/star.svg';

const Place = ({ placeImg, placeName, placeRatings }) => {
   return (
      <div className="place_card">
         <img src={placeImg} alt="Place" />
         <div className="place_headings">
            <h4>{placeName}</h4>
            <div className="rating">
               <img src={Star} alt="star" />
               <p>{placeRatings}</p> 
            </div>
         </div>
      </div>
   );
}
 
export default Place; 