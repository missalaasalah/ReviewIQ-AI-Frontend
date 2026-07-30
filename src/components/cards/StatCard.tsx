import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

type Props = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <Card
      sx={{
        minWidth: 230,
        borderRadius: 4,
        boxShadow: 4,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <Box
        sx={{
          height: 6,
          background: "#1976d2",
        }}
      />

      <CardContent>
        <TrendingUpIcon
          color="primary"
          sx={{ fontSize: 32, mb: 1 }}
        />

        <Typography
          color="text.secondary"
          fontWeight={600}
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={1}
        >
          {value}
        </Typography>

        <Typography
          variant="body2"
          color="success.main"
          mt={1}
        >
          ↑ Updated recently
        </Typography>
      </CardContent>
    </Card>
  );
}