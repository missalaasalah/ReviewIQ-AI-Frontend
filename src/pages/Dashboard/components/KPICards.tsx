import { Box } from "@mui/material";
import StatCard from "../../../components/cards/StatCard";

export default function KPICards() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        mb: 4,
      }}
    >
      <StatCard title="Overall Rating" value="⭐ 4.3" />

      <StatCard title="Total Reviews" value="12,430" />

      <StatCard title="Positive Reviews" value="78%" />

      <StatCard title="Neutral Reviews" value="7%" />

      <StatCard title="Negative Reviews" value="15%" />
    </Box>
  );
}