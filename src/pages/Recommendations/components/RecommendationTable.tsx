import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "recommendation", headerName: "Recommendation", flex: 2 },
  { field: "priority", headerName: "Priority", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
];

const rows = [
  {
    id: 1,
    recommendation: "Improve Food Quality",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    recommendation: "Reduce Delivery Time",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 3,
    recommendation: "Train Customer Service",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 4,
    recommendation: "Review Pricing",
    priority: "Low",
    status: "Completed",
  },
];

export default function RecommendationTable() {
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