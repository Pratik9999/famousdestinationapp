
import React, {useState, useEffect} from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import '../styles/Slider.css';
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';
import Place from './Place';


const Slider = ({ bestPlacesName, countryName }) => {

   const renderPlace = async (countryName) => {

      const resp = await fetch(`http://localhost:8080/famousdestination/api/places/country/${countryName}`);
      const data = await resp.json();

      const newData = data.map((place) => {

         fetch(place.placeImgUrl)
         .then(resp => resp.blob())
         .then(data => place.placeImgUrl = URL.createObjectURL(data));

         return place;

      })

      setPlaces(newData);

   }

   const [places, setPlaces] = useState([]);

   useEffect(() => {
      renderPlace(countryName); 
   }, []); 



   //  Custom Arrow
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
         <h3>Best Places In {bestPlacesName}</h3>
         <Carousel itemsToShow={3} renderArrow={myArrow} itemsToScroll={2} 
         transitionMs={800} itemPadding={[10, 20]}>    
            {
               places.map((place) => {
                  return (
                     <Place
                        key={place.id}
                        placeImg={place.placeImgUrl}
                        placeName={place.placeName}
                        placeRatings={place.placeRatings}
                      />
                  );
               })
            }
         </Carousel>
      </div>
   );

}
 
export default Slider;