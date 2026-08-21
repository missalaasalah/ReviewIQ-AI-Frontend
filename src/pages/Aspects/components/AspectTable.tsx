import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "aspect",
    headerName: "Aspect",
    flex: 1,
  },
  {
    field: "positive",
    headerName: "Positive",
    flex: 1,
  },
  {
    field: "neutral",
    headerName: "Neutral",
    flex: 1,
  },
  {
    field: "negative",
    headerName: "Negative",
    flex: 1,
  },
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