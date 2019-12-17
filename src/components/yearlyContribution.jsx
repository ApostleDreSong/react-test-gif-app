import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2013', contribution: 2400, amt: 2400,
  },
  {
    name: '2014', contribution: 1398, amt: 2210,
  },
  {
    name: '2015', contribution: 9800, amt: 2290,
  },
  {
    name: '2016', contribution: 3908, amt: 2000,
  },
  {
    name: '2017', contribution: 4800, amt: 2181,
  },
  {
    name: '2018', contribution: 3800, amt: 2500,
  },
  {
    name: '2019', contribution: 4300, amt: 2100,
  },
];

export default class YearlyContribution extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="contribution" fill="#8884d8" />
      </BarChart>
      <h4>Contribution by Year</h4>
      </div>
    );
  }
}
