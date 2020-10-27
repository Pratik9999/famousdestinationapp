import React from 'react';
import '../styles/Place.css';
import Star from '../images/star.svg';
import { Link } from 'react-router-dom';

const Place = ({ placeId ,placeImg, placeName, placeRatings }) => {
   return (
      <Link to={`/place/${placeId}`}>
         <div className="place_card">
            <img className="place_card_img" src={placeImg} alt="Place" /> 
            <div className="place_headings">
               <h4>{placeName}</h4>
               <div className="rating">
                  <img src={Star} alt="star" />
                  <p>{placeRatings}</p> 
               </div>
            </div>
         </div>
      </Link>
   );
}
 
export default Place; 