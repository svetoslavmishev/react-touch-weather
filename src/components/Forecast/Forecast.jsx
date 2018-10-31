import React, { Component } from 'react';
import { calcTime, calcDayOfWeek } from '../../utils/dateFormatting';

export default class Forecast extends Component {

  render() {
    let {
      date,
      city,
      description,
      temperature,
      cloudiness,
      windSpeed,
      pressure,
      icon
    } = this.props;

    return (
      <div className="today forecast">
        <div className="forecast-header">
          <div className="day">{calcDayOfWeek(date)}</div>
          <div className="date">{calcTime(date)}</div>
        </div>
        <div className="forecast-content">
          <div className="location">
            <span><img src="images/icon-location.png" alt="" />{city}</span>
            <span className="forecast-description">{description}</span>
          </div>
          <div className="degree">
            <div className="num">{temperature}<sup>o</sup>C</div>
            <div className="forecast-icon">
              <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather" width="100" />
            </div>
          </div>
          <span><img src="images/icon-cloudiness.png" alt="" />{cloudiness} %</span>
          <span><img src="images/icon-wind.png" alt="" />{windSpeed} m/s</span>
          <span><img src="images/icon-pressure.png" alt="" />{pressure} hPa</span>
        </div>
      </div>
    )
  }
} 