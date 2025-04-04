import React from "react";
import { Button } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const ProfilesGrid = ({ profiles, likeProfile, handleEdit, deleteProfile }) => {
  const ActionButtons = (params) => (
    <div className="action-buttons-container">
      <Button variant="success" size="sm" onClick={() => likeProfile(params.data.id)}>Like</Button>
      <Button variant="warning" size="sm" onClick={() => handleEdit(params.data)}>Edit</Button>
      <Button variant="danger" size="sm" onClick={() => deleteProfile(params.data.id)}>Delete</Button>
    </div>
  );

  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Favorite Food", field: "favoriteFood", sortable: true, filter: true },
    { headerName: "Favorite Color", field: "favoriteColor", sortable: true, filter: true },
    { headerName: "Likes", field: "likes", sortable: true },
    {
      headerName: "Actions",
      cellRenderer: ActionButtons
    }
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    filter: true,
  };

  return (
    <div 
      className="ag-theme-material" 
      style={{ 
        height: '500px',
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
        marginBottom: "20px",
        fontSize: "14px"
      }}
    >
      <AgGridReact 
        rowData={profiles} 
        columnDefs={columnDefs} 
        pagination={true} 
        modules={[ClientSideRowModelModule]}
        paginationPageSize={10}
        paginationAutoPageSize={false}
        suppressPaginationPanel={false}
        animateRows={true}
        rowSelection="multiple"
        defaultColDef={defaultColDef}
        domLayout="normal"
        rowHeight={48}
        headerHeight={48}
        suppressCellFocus={true}
        suppressRowHoverHighlight={false}
        enableCellTextSelection={true}
      />
    </div>
  );
};

export default ProfilesGrid;