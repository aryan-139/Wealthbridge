import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api';
import { Box } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useTheme } from '@mui/material';

type Props = {};

const Row3 = (props: Props) => {
  const {palette}= useTheme();
  const {data: kpidata}= useGetKpisQuery();
  const {data: productData}= useGetProductsQuery();
  const{ data: transactionData}= useGetTransactionsQuery();
  //console.log("transactionsData",transactionsData);
  //we can console log the data to see what we are getting back from the api
  const productColumns=[
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams)=>`$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams)=>`$${params.value}`,
    }
  ]
  const transactionColumns=[
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
      
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams)=>`$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams)=>(params.value as Array<string>).length ,
    }
  ]
//using data grid by material ui to display the data
//sx is the style object
//we can use the sx object to style the data grid

  return (
    <>
    <DashboardBox  gridArea="g">
      <BoxHeader
        title="List of Products"
        sideText={`${productData?.length} Products`}
      />
      <Box 
      mt="0.5rem"
      p="0 0.5rem"
      height="75%"
      sx={{
        "& .MuiDataGrid-root": {
          color: palette.grey[300],
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden",
        },
      }}
      >
        <DataGrid
        columnHeaderHeight={25}
        rowHeight={35}
        hideFooter={true}
        rows={productData || []}
        columns={productColumns}
        />
      </Box>
    </DashboardBox>
    
    <DashboardBox  gridArea="h">
    <BoxHeader
        title="Recent Orders"
        sideText={`${transactionData?.length} latest transactions`}
      />
      <Box 
      mt="1rem"
      p="0 0.5rem"
      height="80%"
      sx={{
        "& .MuiDataGrid-root": {
          color: palette.grey[300],
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden",
        },
      }}
      >
        <DataGrid
        columnHeaderHeight={25}
        rowHeight={35}
        hideFooter={true}
        rows={transactionData || []}
        columns={transactionColumns}
        />
      </Box>

    </DashboardBox>
    <DashboardBox  gridArea="i"></DashboardBox>
    <DashboardBox  gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;