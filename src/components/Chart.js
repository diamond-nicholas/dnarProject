/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import { Bar, Line } from 'react-chartjs-2';
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'population',
            data: [22, 25, 89, 99, 77, 9, 72, 81, 19],
            borderColor: ['rgb(70,114,249)'],
            backgroundColor: ['rgb(70,114,249)'],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className='chart'>
        <Line data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Chart;
