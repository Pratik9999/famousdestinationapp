import React from 'react';
import '../styles/Logo.css'; 

const Logo = ({color, margin}) => {
   return (
      <div className="logo_container" style={{color : color, margin : margin}}>
         <h1>Famous Destionation</h1>
         <p>smart pepole choose destination</p>
      </div>
   );
}
 
export default Logo;