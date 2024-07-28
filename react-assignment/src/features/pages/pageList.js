import React, { useState, useEffect } from "react";
import { useGetPageQuery } from "./pageSlice";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const PageList = () => {
  const [columns, setColumns] = useState([]);
  const { data: widgets, isLoading, isSuccess, isError, error } = useGetPageQuery();

  useEffect(() => {
    if (isSuccess) {
      const columnNames = widgets.data.length > 0 ? Object.keys(widgets.data[0]).filter(key => key !== '_id' && key !== '__v') : [];
      const columns = columnNames.map(name => ({
        field: name,
        headerName: name.charAt(0).toUpperCase() + name.slice(1),
        width: 150
      }));
      columns.push({
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
          <Link to={`/pages/edit/${params.row.name}`}>
            <Button variant="outlined" size="medium">
              Edit
            </Button>
          </Link>
        ),
      });
      setColumns(columns);
    }
  }, [isSuccess, widgets]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  const rows = isSuccess ? widgets.data.map((widget, index) => ({ id: index, ...widget })) : [];

  return (
    <div className="flex flex-col gap-3">
      <Link to="/pages/create">
        <Button variant="outlined" size="medium">
            Create
        </Button>
      </Link>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
         pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default PageList;

