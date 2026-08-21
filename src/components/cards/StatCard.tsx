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
      elevation={0}
      sx={{
        minWidth: 230,
        borderRadius: "18px",

        background:
          "linear-gradient(145deg, #FFFDF8 0%, #F8F0DC 100%)",

        border: "1px solid #E4D7B8",

        boxShadow:
          "0 8px 24px rgba(91, 70, 25, 0.08)",

        overflow: "hidden",

        transition: "all 0.25s ease",

        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: "#C9A227",

          boxShadow:
            "0 14px 32px rgba(91, 70, 25, 0.15)",
        },
      }}
    >
      {/* Gold Accent */}
      <Box
        sx={{
          height: 6,

          background:
            "linear-gradient(90deg, #9A7412, #C9A227, #E5C87B)",
        }}
      />

      <CardContent
        sx={{
          p: 3,
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "14px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#F2E7C9",

            border: "1px solid #E0C978",

            mb: 2,
          }}
        >
          <TrendingUpIcon
            sx={{
              fontSize: 28,
              color: "#B58A16",
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 600,
            color: "#6B6252",
            fontSize: "14px",
          }}
        >
          {title}
        </Typography>

        {/* Value */}
        <Typography
          variant="h4"
          sx={{
            mt: 1,

            fontWeight: 800,

            color: "#30291B",

            letterSpacing: "-0.5px",
          }}
        >
          {value}
        </Typography>

        {/* Updated */}
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,

            color: "#9A7412",

            fontWeight: 600,
          }}
        >
          ↑ Updated recently
        </Typography>
      </CardContent>
    </Card>
  );
}