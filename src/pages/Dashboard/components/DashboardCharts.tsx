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
      {/* Sentiment Distribution */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          minWidth: 350,
          p: 3,
          borderRadius: "18px",

          background:
            "linear-gradient(145deg, #FFFDF8 0%, #F8F0DC 100%)",

          border: "1px solid #E4D7B8",

          boxShadow:
            "0 8px 24px rgba(91, 70, 25, 0.08)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow:
              "0 12px 30px rgba(91, 70, 25, 0.14)",
            borderColor: "#C9A227",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#3F3624",
            letterSpacing: "0.2px",
          }}
        >
          Sentiment Distribution
        </Typography>

        <SentimentChart />
      </Paper>

      {/* Aspect Analysis */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          minWidth: 350,
          p: 3,
          borderRadius: "18px",

          background:
            "linear-gradient(145deg, #FFFDF8 0%, #F8F0DC 100%)",

          border: "1px solid #E4D7B8",

          boxShadow:
            "0 8px 24px rgba(91, 70, 25, 0.08)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow:
              "0 12px 30px rgba(91, 70, 25, 0.14)",
            borderColor: "#C9A227",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#3F3624",
            letterSpacing: "0.2px",
          }}
        >
          Aspect Analysis
        </Typography>

        <AspectChart />
      </Paper>
    </Box>
  );
}