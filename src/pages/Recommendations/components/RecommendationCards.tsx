import { Grid, Paper, Typography, Box } from "@mui/material";

const recommendations = [
  {
    title: "Improve Food Quality",
    description: "Customers frequently mention food taste.",
  },
  {
    title: "Reduce Delivery Time",
    description: "Delivery speed affects customer satisfaction.",
  },
  {
    title: "Train Customer Service",
    description: "Improve staff communication skills.",
  },
  {
    title: "Review Pricing",
    description: "Customers mention high prices.",
  },
];

export default function RecommendationCards() {
  return (
    <Grid container spacing={3}>
      {recommendations.map((item, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              minHeight: 130,

              borderRadius: "18px",

              background:
                "linear-gradient(145deg, #FFFDF8 0%, #F8F0DC 100%)",

              border: "1px solid #E4D7B8",

              boxShadow:
                "0 8px 24px rgba(91, 70, 25, 0.08)",

              position: "relative",
              overflow: "hidden",

              transition: "all 0.25s ease",

              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "5px",
                background:
                  "linear-gradient(180deg, #D6B65A, #9A7412)",
              },

              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "#C9A227",
                boxShadow:
                  "0 14px 32px rgba(91, 70, 25, 0.14)",
              },
            }}
          >
            <Box sx={{ pl: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#3F3624",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#6B6252",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}