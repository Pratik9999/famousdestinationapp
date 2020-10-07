import React, { Component } from 'react';
import './styles/App.css';
import Logo from './Components/Logo';
import Slider from './Components/Slider';
import Search from './Components/Search';

class App extends Component {

  render() {
    return (
      <div className="main_container">
        <Logo></Logo>
        <Search></Search> 
        <Slider></Slider>
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
