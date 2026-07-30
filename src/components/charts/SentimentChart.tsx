import {
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
  "#4CAF50",
  "#FFC107",
  "#F44336",
];

export default function SentimentChart() {
  return (
    <PieChart width={400} height={300}>

      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label
      >

        {data.map((entry, index) => (
          <Cell
            key={entry.name}
            fill={COLORS[index]}
          />
        ))}

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>
  );
}