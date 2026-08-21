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
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#E8DFC9"
        />

        <XAxis
          dataKey="month"
          tick={{
            fill: "#6B6252",
            fontSize: 12,
          }}
          axisLine={{
            stroke: "#D8CBAF",
          }}
          tickLine={false}
        />

        <YAxis
          domain={[3, 5]}
          tick={{
            fill: "#6B6252",
            fontSize: 12,
          }}
          axisLine={{
            stroke: "#D8CBAF",
          }}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#FFFDF8",
            border: "1px solid #D6B65A",
            borderRadius: "10px",
            boxShadow: "0 6px 18px rgba(91, 70, 25, 0.12)",
          }}
          labelStyle={{
            color: "#4A3D20",
            fontWeight: 700,
          }}
        />

        <Line
          type="monotone"
          dataKey="rating"
          stroke="#B58A16"
          strokeWidth={3}
          dot={{
            r: 5,
            fill: "#C9A227",
            stroke: "#FFFDF8",
            strokeWidth: 2,
          }}
          activeDot={{
            r: 7,
            fill: "#9A7412",
            stroke: "#FFFDF8",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}