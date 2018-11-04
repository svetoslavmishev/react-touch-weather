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
      description: '',
      error: ''
    };

    this.getData = this.getData.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.city || 'Sofia');
  }

  validate(data) {
    if (data.cod === '400' || data.cod === '404') {
      this.setState({ error: data.message });
      return;
    }
  }

  async getData(city) {
    await getCityForecast(city)
      .then(forecast => {
        if (forecast.cod === '200') {
          this.setState({
            city: forecast.city.name,
            temperature: Math.round(forecast.list[0].main.temp),
            windSpeed: (forecast.list[0].wind.speed).toFixed(1),
            cloudiness: forecast.list[0].clouds.all,
            pressure: Math.round(forecast.list[0].main.pressure),
            date: (forecast.list[0].dt_txt).substr(0, 10),
            list: forecast.list.filter((el, index) => {
              if (index % 8 === 0) { return el; }
            }),
            icon: forecast.list[0].weather[0].icon,
            description: (forecast.list[0].weather[0].main.toUpperCase()),
            error: ''
          });
        } else {
          this.validate(forecast);
        }
      });
  }

  render() {
    return (
      <div>

        <InputLocation
          getData={this.getData}
          error={this.state.error} />

        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">

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

              {this.state.list.map((elem, index) => {
                return <ForecastPredictions
                  key={index}
                  day={elem.dt_txt}
                  maxTemp={Math.round(elem.main.temp_max)}
                  description={elem.weather[0].description}
                  icon={elem.weather[0].icon} />
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}