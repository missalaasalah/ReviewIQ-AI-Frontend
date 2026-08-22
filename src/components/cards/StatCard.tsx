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
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <Card
      sx={{
        minWidth: 230,

        borderRadius: 4,

        boxShadow: 4,

        transition: "0.3s",

        cursor: "pointer",

        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-5px)",

          boxShadow: 8,
        },
      }}
    >
      {/* Gold top line */}

      <Box
        sx={{
          height: 6,

          background:
            "linear-gradient(90deg, #C9A227, #E5C76B)",
        }}
      />

      <CardContent>
        {/* Icon */}

        <TrendingUpIcon
          sx={{
            fontSize: 32,

            mb: 1,

            color: "#C9A227",
          }}
        />

        {/* KPI Title */}

        <Typography
          color="text.secondary"
          sx={{
            fontWeight: 600,

            fontSize: 14,
          }}
        >
          {title}
        </Typography>

        {/* KPI Value */}

        <Typography
          variant="h4"
          sx={{
            mt: 1,

            fontWeight: "bold",

            color: "#302A1C",
          }}
        >
          {value}
        </Typography>

        {/* Subtitle */}

        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              mt: 1,

              color: "#8B6D16",

              fontWeight: 600,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}