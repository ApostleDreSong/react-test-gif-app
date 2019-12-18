import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area
} from 'recharts';

const data = [
  {
    name: 'Jan', contribution: 200, amt: 2400,
  },
  {
    name: 'Feb', contribution: 3000, amt: 2210,
  },
  {
    name: 'Mar', contribution: 2000, amt: 2290,
  },
  {
    name: 'Apr', contribution: 2780, amt: 2000,
  },
  {
    name: 'May', contribution: 1890, amt: 2181,
  },
  {
    name: 'Jun', contribution: 2390, amt: 2500,
  },
  {
    name: 'Jul', contribution: 1800, amt: 1800,
  },
  {
    name: 'Aug', contribution: 600, amt: 600,
  },
  {
    name: 'Sep', contribution: 2500, amt: 2500,
  },
  {
    name: 'Oct', contribution: 3000, amt: 3000,
  },
  {
    name: 'Nov', contribution: 2800, amt: 2800,
  },
  {
    name: 'Dec', contribution: 3500, amt: 3500,
  },
];

export default class MonthlyContribution extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <div>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="#"/>
          <Tooltip />
          <Line type="monotone" dataKey="contribution" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
        <h4>Contributions by month for the current year</h4>
      </div>
    );
  }
}
