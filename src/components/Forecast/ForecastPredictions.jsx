import React, { Component } from 'react';
import { calcTime, calcDayOfWeek } from '../../utils/dateFormatting';


export default class ForecastPredictions extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">Monday</div>
        </div>
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src="images/icons/icon-3.svg" alt="" width="48" />
          </div>
          <div className="degree">23<sup>o</sup>C</div>
          <small>18<sup>o</sup></small>
        </div>
      </div>
    )
  }
}