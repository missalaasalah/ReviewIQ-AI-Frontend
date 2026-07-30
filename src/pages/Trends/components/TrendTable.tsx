import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "month", headerName: "Month", flex: 1 },
  { field: "rating", headerName: "Average Rating", flex: 1 },
];

const rows = [
  { id: 1, month: "January", rating: 3.8 },
  { id: 2, month: "February", rating: 4.0 },
  { id: 3, month: "March", rating: 4.1 },
  { id: 4, month: "April", rating: 4.3 },
  { id: 5, month: "May", rating: 4.4 },
  { id: 6, month: "June", rating: 4.5 },
];

export default function TrendTable() {
  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[6]}
      />
    </div>
  );
}