import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chart({ data, xDataKey, yDataKey, chartTitles, chartColors }) {
  return (
    <LineChart width={1000} height={500} data={data}>
      <XAxis dataKey={xDataKey} />
      <YAxis dataKey={yDataKey} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" height={50} />
      {chartTitles.map((title, index) => (
        <Line
          key={title}
          name={title}
          type="monotone"
          dataKey={`data${index}`}
          stroke={chartColors[index]}
        />
      ))}
    </LineChart>
  );
}

export default Chart;
