import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "month",
    headerName: "Month",
    flex: 1,
  },
  {
    field: "rating",
    headerName: "Average Rating",
    flex: 1,
  },
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
    <div
      style={{
        height: 350,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[6]}
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
        }}
      />
    </div>
  );
}