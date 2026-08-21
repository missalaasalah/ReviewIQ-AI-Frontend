import {
  BarChart,
  Bar,
  Cell,
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

// Gold palette
const goldColors = [
  "#B8860B", // Dark Gold
  "#C9A227", // Classic Gold
  "#D5B34A", // Warm Gold
  "#E5C87B", // Light Gold
];

export default function AspectChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(120,111,96,0.15)"
        />

        <XAxis
          dataKey="aspect"
          tick={{
            fill: "#786F60",
            fontSize: 12,
          }}
          axisLine={{
            stroke: "rgba(120,111,96,0.25)",
          }}
          tickLine={false}
        />

        <YAxis
          domain={[0, 100]}
          tick={{
            fill: "#786F60",
            fontSize: 12,
          }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{
            fill: "rgba(201,162,39,0.08)",
          }}
          contentStyle={{
            backgroundColor: "#FFFDF8",
            border: "1px solid rgba(201,162,39,0.35)",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(23,23,23,0.12)",
          }}
          labelStyle={{
            color: "#242424",
            fontWeight: 700,
          }}
        />

        <Bar
          dataKey="positive"
          radius={[8, 8, 0, 0]}
          barSize={48}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.aspect}`}
              fill={goldColors[index % goldColors.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}