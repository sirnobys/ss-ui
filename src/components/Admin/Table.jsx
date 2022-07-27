import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
const columns = [
  //   { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
    `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  { field: "telephone", headerName: "Telephone", flex: 1 },
  { field: "firstTimerStatus", headerName: "First-timer", flex: 1 },
  { field: "memberShipStatus", headerName: "Membership", flex: 1 },
  { field: "verificationStatus", headerName: "Verified", flex: 1 },
];


export default function Table(props) {
  return (
    <div style={{ height: 400, width: "100%", background: "white" }}>
      <DataGrid
        rows={props.row}
        columns={columns}
        pageSize={5}
        components={{ Toolbar: GridToolbar }}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
