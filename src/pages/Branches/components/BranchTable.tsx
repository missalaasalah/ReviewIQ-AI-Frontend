import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "branch", headerName: "Branch", flex: 1 },
  { field: "reviews", headerName: "Reviews", flex: 1 },
  { field: "rating", headerName: "Rating", flex: 1 },
  { field: "positive", headerName: "Positive", flex: 1 },
];

const rows = [
  {
    id: 1,
    branch: "Nasr City",
    reviews: 4200,
    rating: 4.6,
    positive: "88%",
  },
  {
    id: 2,
    branch: "Maadi",
    reviews: 3100,
    rating: 4.2,
    positive: "79%",
  },
  {
    id: 3,
    branch: "Dokki",
    reviews: 2900,
    rating: 3.8,
    positive: "68%",
  },
];

export default function BranchTable() {
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