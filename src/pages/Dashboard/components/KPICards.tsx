import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import ReviewsIcon from "@mui/icons-material/Reviews";
import StarIcon from "@mui/icons-material/Star";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cards = [
  {
    title: "Total Reviews",
    value: "2,890",
    subtitle: "Customer reviews analyzed",
    icon: <ReviewsIcon />,
  },
  {
    title: "Average Rating",
    value: "4.3",
    subtitle: "Overall customer rating",
    icon: <StarIcon />,
  },
  {
    title: "Positive Sentiment",
    value: "78%",
    subtitle: "Positive customer feedback",
    icon: <SentimentSatisfiedAltIcon />,
  },
  {
    title: "Customer Satisfaction",
    value: "86%",
    subtitle: "Overall satisfaction score",
    icon: <TrendingUpIcon />,
  },
];

export default function KPICards() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 2.5,
        mb: 4,
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.title}
          sx={{
            minHeight: 190,
            borderRadius: 4,
            backgroundColor: "#FFFDF8",
            border: "1px solid rgba(201,162,39,0.18)",
            boxShadow: "0 8px 24px rgba(80,60,20,0.08)",
            overflow: "hidden",

            transition: "all 0.25s ease",

            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow:
                "0 14px 30px rgba(80,60,20,0.14)",
            },
          }}
        >
          {/* Gold top line */}
          <Box
            sx={{
              height: 6,
              background:
                "linear-gradient(90deg, #B88E19, #C9A227, #E5C76B)",
            }}
          />

          <CardContent
            sx={{
              p: 2.5,
              "&:last-child": {
                pb: 2.5,
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background:
                  "linear-gradient(135deg, rgba(201,162,39,0.16), rgba(229,199,107,0.30))",

                color: "#B88E19",

                mb: 1.5,
              }}
            >
              {card.icon}
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: "#786F60",
              }}
            >
              {card.title}
            </Typography>

            {/* Value */}
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#302A1C",
              }}
            >
              {card.value}
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: 0.8,
                fontSize: 11.5,
                color: "#9A8E78",
              }}
            >
              {card.subtitle}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}