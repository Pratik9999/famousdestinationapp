import React, { Component } from 'react';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Search from './Components/Search';
import PlaceInfo from './Components/PlaceInfo';
import './styles/App.css';

class App extends Component {

  render() {
    return (
      // <div className="main_container">
      //   <Logo />
      //   <Search />
      //   <Slider bestPlacesName="USA" countryName="america" /> 
      //   <Slider bestPlacesName="Brazil" countryName="brazil" />
      //   <Slider bestPlacesName="Australia" countryName="australia" />
      //   <Slider bestPlacesName="Vietnam" countryName="vietnam" />
      
      //   {/* <Content>
      //     <Slider></Slider>
      //     <Slider></Slider>
      //     <Slider></Slider>
      //   </Content>
      //   <Footer></Footer> */}
      // </div>
      <div>
        <PlaceInfo />
      </div>
    );
  }

}

export default App;
