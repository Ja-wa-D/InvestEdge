import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export function LineGraph({ data }) {
  const theme = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: theme.typography.fontFamily,
            size: 12,
            weight: 500
          },
          color: theme.palette.text.secondary,
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 10,
        bodyFont: {
          family: theme.typography.fontFamily
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.divider,
          drawBorder: false
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            family: theme.typography.fontFamily,
            size: 11
          }
        }
      },
      x: {
        grid: {
          color: theme.palette.divider,
          drawBorder: false
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            family: theme.typography.fontFamily,
            size: 11
          }
        }
      }
    }
  };

  return (
    <div style={{ 
      width: '380px', 
      height: '380px',
      padding: theme.spacing(2)
    }}>
      <Line data={data} options={options} />
    </div>
  );
}
