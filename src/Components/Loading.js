import React from 'react';
import '../styles/Loding.css';
import LoadingImg from '../images/lodingImg.svg'; 

const Loading = () => {
   return (
      <div className="loding_container">
         <img src={LoadingImg} alt="loding" />
      </div>
   );
}
 
export default Loading;