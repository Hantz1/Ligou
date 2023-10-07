import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fev',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mars',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Avril',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mai',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Juin',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Juil',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aout',
    uv: 390,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 5490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 6490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be .</p>
      </div>
    );
  }

  return null;
};

export default class SaleCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tooltip-with-customized-content-lyxvs';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={250}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pv" barSize={15} fill="#2ba062" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
