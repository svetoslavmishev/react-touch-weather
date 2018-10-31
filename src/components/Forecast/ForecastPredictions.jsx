import React, { Component } from 'react';
import { calcDayOfWeek } from '../../utils/dateFormatting';


export default class ForecastPredictions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, maxTemp, day, description } = this.props;
    return (
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">{calcDayOfWeek(day)}</div>
        </div>
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather" width="50" />
          </div>
          <small><sup>{description.toUpperCase()}</sup></small>
          <div className="degree">{maxTemp}<sup>o</sup>C</div>
        </div>
      </div>
    )
  }
}