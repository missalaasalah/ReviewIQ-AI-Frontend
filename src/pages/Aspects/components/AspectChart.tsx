import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { aspect: "Food", score: 85 },
  { aspect: "Service", score: 72 },
  { aspect: "Delivery", score: 60 },
  { aspect: "Price", score: 68 },
];

export default function AspectChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="aspect" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" fill="#1976d2" />
      </BarChart>
    </ResponsiveContainer>
  );
}