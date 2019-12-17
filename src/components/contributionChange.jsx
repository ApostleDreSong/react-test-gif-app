import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: '2013', contribution: 4000, amt: 2400,
  },
  {
    name: '2014', contribution: -3000, amt: 2210,
  },
  {
    name: '2015', contribution: -2000, amt: 2290,
  },
  {
    name: '2016', contribution: 2780, amt: 2000,
  },
  {
    name: '2017', contribution: -1890, amt: 2181,
  },
  {
    name: '2018', contribution: 2390, amt: 2500,
  },
  {
    name: '2019', contribution: 3490, amt: 2100,
  },
];

export default class ContributionChange extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

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
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="contribution" fill="#8884d8" />
      </BarChart>
      <h4>Contribution increase/decrease by year</h4>
      </div>
    );
  }
}
