import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "branch",
    headerName: "Branch",
    flex: 1,
  },
  {
    field: "reviews",
    headerName: "Reviews",
    flex: 1,
  },
  {
    field: "rating",
    headerName: "Rating",
    flex: 1,
  },
  {
    field: "positive",
    headerName: "Positive",
    flex: 1,
  },
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