import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "aspect", headerName: "Aspect", flex: 1 },
  { field: "positive", headerName: "Positive", flex: 1 },
  { field: "neutral", headerName: "Neutral", flex: 1 },
  { field: "negative", headerName: "Negative", flex: 1 },
];

const rows = [
  {
    id: 1,
    aspect: "Food",
    positive: "85%",
    neutral: "10%",
    negative: "5%",
  },
  {
    id: 2,
    aspect: "Service",
    positive: "72%",
    neutral: "15%",
    negative: "13%",
  },
  {
    id: 3,
    aspect: "Delivery",
    positive: "60%",
    neutral: "20%",
    negative: "20%",
  },
  {
    id: 4,
    aspect: "Price",
    positive: "68%",
    neutral: "18%",
    negative: "14%",
  },
];

export default function AspectTable() {
  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
      />
    </div>
  );
}