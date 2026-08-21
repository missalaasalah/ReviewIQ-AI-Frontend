import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "recommendation",
    headerName: "Recommendation",
    flex: 2,
  },
  {
    field: "priority",
    headerName: "Priority",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
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
    <div
      style={{
        height: 350,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          border: "1px solid #E4D7B8",
          borderRadius: "14px",
          backgroundColor: "#FFFDF8",

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F2E7C9",
            color: "#4A3D20",
            fontWeight: 700,
            borderBottom: "1px solid #D8CBAF",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
          },

          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #EEE6D5",
            color: "#4A463D",
          },

          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#FBF5E8",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #E4D7B8",
            backgroundColor: "#FFFDF8",
          },

          "& .MuiTablePagination-root": {
            color: "#5F5748",
          },

          "& .MuiDataGrid-selectedRowCount": {
            color: "#C9A227",
          },
        }}
      />
    </div>
  );
}