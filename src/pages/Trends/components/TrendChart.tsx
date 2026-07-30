import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", rating: 3.8 },
  { month: "Feb", rating: 4.0 },
  { month: "Mar", rating: 4.1 },
  { month: "Apr", rating: 4.3 },
  { month: "May", rating: 4.4 },
  { month: "Jun", rating: 4.5 },
];

export default function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[3, 5]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="rating"
          stroke="#1976d2"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}