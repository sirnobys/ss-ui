import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
    field: "email",
    headerName: "Email",
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ""}.${params.row.lastName || ""}@gmail.com`,
  },
  { field: "telephone", headerName: "Telephone", flex: 1 },
  { field: "firsttimer", headerName: "First-timer", flex: 1 },
  { field: "membership", headerName: "Membership", flex: 1 },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Doh",
    firstName: "Erastus",
    gender: "Male",
    email: "",
    telephone: "+233554567709",
    membership: "Yes",
    firsttimer: "Yes",
  },
  {
    id: 2,
    lastName: "Lan",
    firstName: "Queen",
    gender: "Female",
    email: "",
    telephone: "+233245468468",
    membership: "No",
    firsttimer: "No",
  },
  {
    id: 3,
    lastName: "Smith",
    firstName: "Jaime",
    gender: "Male",
    email: "",
    telephone: "+233265565464",
    membership: "Yes",
    firsttimer: "Yes",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    gender: "Female",
    email: "",
    telephone: "+233556468455",
    membership: "No",
    firsttimer: "Yes",
  },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: "100%", background: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
