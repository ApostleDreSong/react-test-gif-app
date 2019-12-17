import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Point 1', "monthly contribution": 4000, "yearly contribution": 2400, amt: 2400,
  },
  {
    name: 'Point 2', "monthly contribution": 3000, "yearly contribution": 1398, amt: 2210,
  },
  {
    name: 'Point 3', "monthly contribution": 2000, "yearly contribution": 9800, amt: 2290,
  },
  {
    name: 'Point 4', "monthly contribution": 2780, "yearly contribution": 3908, amt: 2000,
  },
  {
    name: 'Page 5', "monthly contribution": 1890, "yearly contribution": 4800, amt: 2181,
  },
  {
    name: 'Point 6', "monthly contribution": 2390, "yearly contribution": 3800, amt: 2500,
  },
  {
    name: 'Point 7', "monthly contribution": 3490, "yearly contribution": 4300, amt: 2100,
  },
];

export default class AverageContribution extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
        <div>
      <LineChart
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
        <Line type="monotone" dataKey="yearly contribution" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="monthly contribution" stroke="#82ca9d" />
      </LineChart>
      <h4>Average contribution amount by month and year</h4>
      </div>
    );
  }
}
