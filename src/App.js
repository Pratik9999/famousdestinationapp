import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'; 
import Loading from './Components/Loading';
import PlaceInfo from './Components/PlaceInfo';
import './styles/App.css';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Search from'./Components/Search';
import Place from'./Components/Place';
import Content from'./Components/Content';
import Footer from'./Components/Footer';
import { motion, useCycle, AnimatePresence } from 'framer-motion';


const App = () => {

  const location = useLocation();
  const history = useHistory();

  history.listen((location) => {
    const path = location.pathname;
    if(path.startsWith("/place")) {   
      window.scrollTo(0, 0); 
    }
  });

  // State
  const [searchValue, setSearchValue] = useState('');

  const [mainContent, setMainContent] = useState(( 
    <div> 

    </div> 
  )); 


  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const fetchingPlaceByCountryName = async (countryName) => {

    const resp = await fetch(
    `https://famous-destination.herokuapp.com/famousdestination/api/places/country/${countryName}`);
    const data = await resp.json();

    if(!(data.hasOwnProperty('status'))) {
      const newData = data.map((place) => {
        fetch(place.placeImgUrl)
        .then(resp => resp.blob())
        .then(data => place.placeImgUrl = URL.createObjectURL(data));

        return place;
      })

      const placeGrid = () => {
        return(
          <div className ="placeGrid">
            {newData.map((place) => {
              return (
                <Place
                  key={place.id}
                  placeId={place.id}
                  placeImg={place.placeImgUrl}
                  placeName={place.placeName}
                  placeRatings={place.placeRatings}
                />
              );
            })}
          </div>
        );
      } 

      setMainContent(placeGrid);

    } else {
      const message = (
      <div>
        <p className="message">
        <span>Cannot found famous destinations.</span>
        <span>You can Search for India, America, China, Brazil, Russia, Mexico, Vietnam, South Africa, Australia and Japan. </span>
        </p>
        <Slider bestPlacesName="Brazil" countryName="brazil" />
        <Slider bestPlacesName="USA" countryName="america" /> 
        <Slider bestPlacesName="Australia" countryName="australia" />
        <Slider bestPlacesName="Vietnam" countryName="vietnam" /> 
      </div> 
      );
      
      setMainContent(message);
    }

  }

  const onSearchBtnClickOrEnter = (event) => {
    if(event.type === "click" || event.key === "Enter") {
      fetchingPlaceByCountryName(searchValue);
    }
  }

  const containerVariant = {
    initi : {
      opacity : 0
    },
    startingAnimation : {
        opacity : 1,
        transition : { delay: 8, duration: 0.8, type: "tween" }   
    },
    delayedAnimation : {
      opacity : 1,
      transition : { delay: 0, duration: 1, type: "tween" }       
    },
    exit : {
      opacity : 0,
      x: '-100vw',
      transition : { delay: 0, duration: 0.8, type: "tween" }  
    }
  }

  const [animation, cycleAnimation] = useCycle("startingAnimation", "delayedAnimation");

  useEffect(() => {
    setMainContent(
      <div>
        <Slider bestPlacesName="Brazil" countryName="brazil" />
        <Slider bestPlacesName="USA" countryName="america" /> 
        <Slider bestPlacesName="Australia" countryName="australia" />
        <Slider bestPlacesName="Vietnam" countryName="vietnam" /> 
      </div>
    );

    setTimeout(() => {
      const loader = document.querySelector('.loding_container');
      loader.style.display = 'none';
      cycleAnimation(); 
    }, 8000); 

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const notResponsiveMessage = <p className="notResponsiveMessage">This website is not yet responsive for mobile and tablet, 
                                but can you view on desktop or laptop.</p> 



  return ( 
    <> 
    {notResponsiveMessage}
    <div className="parent_container">
      <Loading /> 
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <motion.div 
              className="main_container"
              variants={containerVariant} 
              initial="initi"
              animate={animation} 
              exit="exit" 
            >  
                <Logo />
                <Search onSearchChange={onSearchChange} onSearchBtnClickOrEnter={onSearchBtnClickOrEnter} />
                <Content>
                  {mainContent} 
                </Content> 
            </motion.div> 
            <Footer />
          </Route>
          <Route exact path="/place/:id" component={PlaceInfo} />  
        </Switch> 
      </AnimatePresence>
    </div>
    </>
  );

}

export default App; 
