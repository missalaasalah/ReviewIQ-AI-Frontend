import { Box, Paper, Typography } from "@mui/material";

import SentimentChart from "../../../components/charts/SentimentChart";
import AspectChart from "../../../components/charts/AspectChart";

export default function DashboardCharts() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        mt: 4,
      }}
    >
      <Paper
        sx={{
          flex: 1,
          minWidth: 350,
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Sentiment Distribution
        </Typography>

        <SentimentChart />
      </Paper>

      <Paper
        sx={{
          flex: 1,
          minWidth: 350,
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Aspect Analysis
        </Typography>

        <AspectChart />
      </Paper>
    </Box>
  );
}