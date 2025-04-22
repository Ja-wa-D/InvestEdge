import React from 'react';
import { DoughnutChart } from './DoughnoutChart';
import { LineGraph } from './LineGraph';
import { useTheme } from "@mui/material/styles";

export function ChartContainer({ data }) {
  const theme = useTheme();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      width: '100%'
    }}>
      <DoughnutChart data={data} />
      <LineGraph data={data} />
    </div>
  );
}
