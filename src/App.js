import React, { useState, useEffect } from 'react';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Search from './Components/Search';
import PlaceInfo from './Components/PlaceInfo';
import Place from './Components/Place';
import Content from './Components/Content';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

const App = () => {

  // State
  const [mainContent, setMainContent] = useState((
    <div>
      <Slider bestPlacesName="USA" countryName="america" /> 
      <Slider bestPlacesName="Brazil" countryName="brazil" />
      <Slider bestPlacesName="Australia" countryName="australia" />
      <Slider bestPlacesName="Vietnam" countryName="vietnam" />
    </div>
  ));

  const [searchValue, setSearchValue] = useState('');


  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const fetchingPlaceByCountryName = async (countryName) => {

    const resp = await fetch(`http://localhost:8080/famousdestination/api/places/country/${countryName}`);
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
      const message = <p>Cannot found famous destinations.</p>;
      setMainContent(message);
    }

  }

  const onSearchBtnClickOrEnter = (event) => {
    if(event.type === "click" || event.key === "Enter") {
      fetchingPlaceByCountryName(searchValue);
    }
  }

  useEffect(() => {

  }, []);

  return (
      <div>
        <Switch>
        <Route exact path="/">
          <div className="main_container">             
              <Logo />
              <Search onSearchChange={onSearchChange} onSearchBtnClickOrEnter={onSearchBtnClickOrEnter} />
              <Content>
                {mainContent} 
              </Content>  
          </div>
          </Route>
          <Route exact path="/place/:id" component={PlaceInfo} /> 
        </Switch>
      </div>
  );

}

export default App;