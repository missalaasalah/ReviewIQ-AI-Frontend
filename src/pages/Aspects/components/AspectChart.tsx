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
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#E8DFC9"
          vertical={false}
        />

        <XAxis
          dataKey="aspect"
          tick={{
            fill: "#5F5748",
            fontSize: 13,
          }}
          axisLine={{
            stroke: "#D8CBAF",
          }}
          tickLine={false}
        />

        <YAxis
          domain={[0, 100]}
          tick={{
            fill: "#5F5748",
            fontSize: 12,
          }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#FFFDF8",
            border: "1px solid #D6B65A",
            borderRadius: "10px",
            boxShadow: "0 6px 18px rgba(80, 60, 20, 0.12)",
          }}
          labelStyle={{
            color: "#29251D",
            fontWeight: 700,
          }}
        />

        <Bar
          dataKey="score"
          fill="#C9A227"
          radius={[8, 8, 0, 0]}
          barSize={42}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}