import { Box } from "@mui/material";
import StatCard from "../../../components/cards/StatCard";

export default function KPICards() {
  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
        },

        gap: 2.5,

        mb: 4,
      }}
    >
      <StatCard
        title="Overall Rating"
        value="⭐ 4.3"
      />

      <StatCard
        title="Total Reviews"
        value="12,430"
      />

      <StatCard
        title="Positive Reviews"
        value="78%"
      />

      <StatCard
        title="Neutral Reviews"
        value="7%"
      />

      <StatCard
        title="Negative Reviews"
        value="15%"
      />
    </Box>
  );
}