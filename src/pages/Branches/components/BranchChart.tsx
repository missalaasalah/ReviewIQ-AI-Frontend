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
  { branch: "Nasr", rating: 4.6 },
  { branch: "Maadi", rating: 4.2 },
  { branch: "Dokki", rating: 3.8 },
];

export default function BranchChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="branch" />
        <YAxis domain={[0, 5]} />
        <Tooltip />
        <Bar dataKey="rating" fill="#2e7d32" />
      </BarChart>
    </ResponsiveContainer>
  );
}