
import React, { useState, useEffect } from 'react';
import '../styles/PlaceInfo.css';
import Location from '../images/location.svg';

const PlaceInfo = ({ placeInfoImg }) => {

   const [place, setPlace] = useState({});

   const renderPlace = async () => {
      const resp = await fetch('http://localhost:8080/famousdestination/api/places/2065');  
      const data = await resp.json();

      const respImg = await fetch(data.placeImgUrl);
      const imgData = await respImg.blob();
      const url = URL.createObjectURL(imgData);

      const paragraph = data.placeDescription.split(/[\n\r]/g);    
      const  paras = paragraph.map((para, i) => {
         return <span key={i} className="paraSpacing">{para} </span>; 
      });   

      const newPlace =  Object.assign(data, { placeImgUrl : url, placeDescription : paras }); 
      
      setPlace(newPlace);  
   }

   useEffect(() => {
      renderPlace();
   }, []); 

   return (
      <div className="placeInfo_container">
         <img className="placeInfo_img" src={place.placeImgUrl} alt="place" /> 
         <div className="placeInfo_info">
            <h2>{place.placeName}</h2>
            <p>
               {place.placeDescription}
            </p>
            <div className="placeInfo_location"> 
               <img src={Location} alt="location" />
               <p>{place.placelocation}</p>
            </div>
         </div>
      </div>
   );
}
 
export default PlaceInfo;