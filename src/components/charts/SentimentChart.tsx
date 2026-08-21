import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Positive", value: 78 },
  { name: "Neutral", value: 7 },
  { name: "Negative", value: 15 },
];

const COLORS = [
  "#B8860B", // Dark Gold - Positive
  "#D5B34A", // Warm Gold - Neutral
  "#E5C87B", // Light Gold - Negative
];

export default function SentimentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={55}
          paddingAngle={3}
          cornerRadius={6}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#FFFDF8"
              strokeWidth={3}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => `${value}%`}
          contentStyle={{
            backgroundColor: "#FFFDF8",
            border: "1px solid rgba(201,162,39,0.35)",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(23,23,23,0.12)",
          }}
        />

        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          wrapperStyle={{
            fontSize: "13px",
            color: "#786F60",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}