import React from 'react';
import Logo from './Logo';
import '../styles/Footer.css';
import Facbook from '../images/facebook_icon.svg';
import Insta from '../images/insta_icon.svg';
import Twitter from '../images/twitter_icon.svg';
import Youtube from '../images/youtube_icon.svg';

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer_container">
            <Logo color="#D0D0D0" margin="0" /> 
            <div className="socialMedia_icon_container">
               <p>Follow Us on</p>
               <div className="socialMedia_icon_img">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                     <img src={Facbook} alt="facbook_icon"></img>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                     <img src={Insta} alt="insta_icon"></img>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                     <img src={Twitter} alt="twitter_icon"></img>
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                     <img src={Youtube} alt="youtube_icon"></img> 
                  </a>
               </div> 
            </div>           
         </div>
         <h6>
            Made By Pratik Chauhan, Github repo for this website is : &nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pratik9999/famousdestinationapp">Famous Destination</a> 
         </h6>
      </div>
   );
}
 
export default Footer; 