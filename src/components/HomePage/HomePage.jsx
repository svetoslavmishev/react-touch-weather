import React, { Component } from 'react';
import { getCityForecast } from '../../api/ForecastAPI';
import InputLocation from '../Input/Input';
import ForecastPredictions from '../Forecast/ForecastPredictions';
import Forecast from '../Forecast/Forecast';


export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      temperature: '',
      windSpeed: '',
      cloudiness: '',
      pressure: '',
      date: '',
      list: [],
      icon: '',
      description: ''
    };
  }

  componentDidMount() {
    this.getData(this.state.city || 'Sofia');
  }

  async getData(city) {
    await getCityForecast(city)
      .then(forecast =>
        this.setState({
          city: forecast.city.name,
          temperature: Math.round(forecast.list[0].main.temp),
          windSpeed: (forecast.list[0].wind.speed).toFixed(1),
          cloudiness: forecast.list[0].clouds.all,
          pressure: Math.round(forecast.list[0].main.pressure),
          date: (forecast.list[0].dt_txt).substr(0, 10),
          list: forecast.list.filter((el, index) => {
            if (index % 7 === 0) { return el; }
          }),
          icon: forecast.list[0].weather[0].icon,
          description: (forecast.list[0].weather[0].main.toUpperCase()),
        })
      );
  }

  render() {
    return (
      <div>

        {/* TODO: Input city component */}
        <InputLocation />

        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">

              {/* TODO: component about current forecast */}
              <Forecast
                date={this.state.date}
                city={this.state.city}
                description={this.state.description}
                temperature={this.state.temperature}
                cloudiness={this.state.cloudiness}
                windSpeed={this.state.windSpeed}
                pressure={this.state.pressure}
                icon={this.state.icon}
              />

              {/* TODO: components about next 5 days forecast */}
              {this.state.list.map((elem, index) => {
                return <ForecastPredictions key={index} data={elem} />
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}