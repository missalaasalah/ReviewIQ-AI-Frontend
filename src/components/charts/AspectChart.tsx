import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { aspect: "Food", positive: 85 },
  { aspect: "Service", positive: 75 },
  { aspect: "Delivery", positive: 60 },
  { aspect: "Price", positive: 55 },
];

export default function AspectChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="aspect" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="positive"
          fill="#1976d2"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}