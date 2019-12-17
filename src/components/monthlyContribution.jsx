import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';

const data = [
  {
    name: 'Jan', contribution: 4000, amt: 2400,
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
    name: 'Jul', contribution: 3490, amt: 2100,
  },
  {
    name: 'Aug', contribution: 3490, amt: 2100,
  },
  {
    name: 'Sep', contribution: 3490, amt: 2100,
  },
  {
    name: 'Oct', contribution: 3490, amt: 2100,
  },
  {
    name: 'Nov', contribution: 3490, amt: 2100,
  },
  {
    name: 'Dec', contribution: 3490, amt: 2100,
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
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="contribution" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
        <h4>Contribution by Month</h4>
      </div> 
    );
  }
}
