
import React, { useState, useEffect } from 'react';
import '../styles/PlaceInfo.css';
import Location from '../images/location.svg';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const PlaceInfo = ({ match }) => {

   const [place, setPlace] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const renderPlace = async () => {

      const resp = await fetch(`http://localhost:8080/famousdestination/api/places/${match.params.id}`);  
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
      setIsLoading(false); 
   }

   useEffect(() => {
      renderPlace();
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <div>
         {
         !(isLoading) ? 
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
               <Link to="/"><span className="back_to_home_btn">Back To Home</span></Link> 
            </div>
         </div> :
         <Loading />
         }
      </div>
   );
}
 
export default PlaceInfo;