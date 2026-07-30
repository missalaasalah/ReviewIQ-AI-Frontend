import { Grid, Paper, Typography } from "@mui/material";

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
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              {item.title}
            </Typography>

            <Typography color="text.secondary">
              {item.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}