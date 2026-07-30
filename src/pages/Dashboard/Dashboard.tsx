import { Typography } from "@mui/material";

import KPICards from "./components/KPICards";
import DashboardCharts from "./components/DashboardCharts";
import RecentReviews from "./components/RecentReviews";
import AIInsights from "./components/AIInsights";

export default function Dashboard() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Executive Overview
      </Typography>

      <KPICards />

      <DashboardCharts />

      <RecentReviews />

      <AIInsights />
    </>
  );
}