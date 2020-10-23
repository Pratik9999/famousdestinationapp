
import React, { useState, useEffect } from 'react';
import '../styles/PlaceInfo.css';
import Location from '../images/location.svg';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { withRouter } from 'react-router-dom';

const PlaceInfo = ({ match }) => {

   const [place, setPlace] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const renderPlace = async () => {

      const resp = await fetch(
      `https://famous-destination.herokuapp.com/famousdestination/api/places/${match.params.id}`);  
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

   const placeInfoVariant = { 
      initi : {
         opacity : 0
      },
      startingAnimation : {
         opacity : 1,
         transition : { delay: 0.6, duration: 0.4, type: "tween" } 
      },
      exit : {
         opacity : 0,  
         transition : { delay: 0.4, duration: 0.4, type: "tween" }        
      }
   }

   return (
      <div>
         {
         !(isLoading) ? 
         <motion.div 
            className="placeInfo_container"
            variants={placeInfoVariant} 
            initial="initi"
            animate="startingAnimation"
            exit="exit"
         >
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
               <button onClick={this.props.history.goBack}><span className="back_to_home_btn">Back To Home</span></button> 
            </div>
         </motion.div> : 
         <Loading />
         }
      </div>
   );
}
 
export default PlaceInfo; 