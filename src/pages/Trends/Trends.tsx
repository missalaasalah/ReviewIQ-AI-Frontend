import { Box, Typography } from "@mui/material";
import TrendTable from "./components/TrendTable";

export default function Trends() {
  return (
    <Box>

      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Trend Analysis
      </Typography>


      <TrendTable />

    </Box>
  );
}