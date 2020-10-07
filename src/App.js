import React, { Component } from 'react';
import './styles/App.css';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Search from './Components/Search';

class App extends Component {

  render() {
    return (
      <div className="main_container">
        <Logo />
        <Search />
        <Slider bestPlacesName="USA" countryName="america" /> 
        <Slider bestPlacesName="Brazil" countryName="brazil" />
        <Slider bestPlacesName="Australia" countryName="australia" />
        <Slider bestPlacesName="Vietnam" countryName="vietnam" />
        
        
        {/* <Content>
          <Slider></Slider>
          <Slider></Slider>
          <Slider></Slider>
        </Content>
        <Footer></Footer> */}
      </div>
    );
  }

}

export default App;
