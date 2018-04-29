import React, { Component } from 'react';
import Weather from './Components/Weather/Weather';
import Forecast from './Components/Forecast/Forecast';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      forecast: [],
      url: '/api/weather'
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(state, city){
    axios.get(`${this.state.url}/${state}/${city}`)
    .then(response => {
      this.setState({
        data: response.data.forecast.simpleforecast.forecastday.slice(0, 5)
      })
    });

}

postWeather(){
  // axios.post(this.state.url, {
    
  // })
  // .then(res => console.log(res))
  // .catch(res => console.log(res));

  if(this.state.data){
    console.log(this.state.data[0].date.weekday)
  } else{
    console.log(this.state.data);
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         DevWeather
        </header>
        <Weather getWeather={this.getWeather}/>
        <Forecast forecast={this.state.forecast}/>
        
        
      </div>
    );
  }
}

export default App;
