import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {};

const Row2 = (props: Props) => {
  const{palette}=useTheme();
  const{data:operationalData}= useGetKpisQuery(); 
  const{data: productData}= useGetProductsQuery();
  console.log("data",operationalData);

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses,
        };
      })
    );
  }, [operationalData]);

  return (
    <>
        <DashboardBox  gridArea="d">
    <BoxHeader 
        title="Operational vs Non Operational Expenses"
        sideText="+4%"
      />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={operationalExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
          
          <XAxis 
          dataKey="name" 
          tickLine={false} 
          style={{fontSize: "10px"}}
          />
          <YAxis
           yAxisId="left"
           orientation="left"
           tickLine={false} 
           axisLine={false}
           style={{fontSize:"10px"}}          
          />

           <YAxis
          yAxisId="right"
          orientation="right"
           tickLine={false} 
           axisLine={false}
           style={{fontSize:"10px"}}
          
          />
          <Tooltip />

        

        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Non Operational Expenses"
          stroke={palette.tertiary[500]}
        />

        <Line 
          yAxisId="right"
          type="monotone"
          dataKey="Operational Expenses"
          stroke={palette.primary.main}
        />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    
    <DashboardBox  gridArea="e"></DashboardBox>
    <DashboardBox  gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;