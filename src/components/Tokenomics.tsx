import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsChart: React.FC = () => {
  const data = {
    labels: ["Presale", "Team", "LP + Treasury"],
    datasets: [
      {
        label: "Tokenomics Distribution",
        data: [60, 10, 30],
        backgroundColor: [
          "rgba(0, 255, 168, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 193, 7, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(0, 255, 168, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 193, 7, 1)",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          font: {
            size: 14,
            weight: "bold" as const,
            family: "'Poppins', sans-serif",
          },
          color: "#ffffff",
          padding: 10,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw || 0;
            return `${value}%`;
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
  };

  const tokenDetails = [
    {
      name: "Presale",
      percentage: 60,
      color: "rgba(0, 255, 168, 1)",
      description: "Funds allocated for the initial presale to attract early investors.",
    },
    {
      name: "Team",
      percentage: 10,
      color: "rgba(255, 99, 132, 1)",
      description: "Distributed among team members as an incentive for their contributions.",
    },
    {
      name: "LP + Treasury",
      percentage: 30,
      color: "rgba(255, 193, 7, 1)",
      description: "7500 ALPH allocated to the pool + 30M ALF tokens.",
    },
  ];

  return (
    <div
      className="tokenomics-container"  
      style={{
        border: '2px solid rgba(0, 0, 0, 0.77)',
        marginBottom: "5%",
        textAlign: "center",
        borderRadius: "12px",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(121, 96, 61, 0.6)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        padding: "10px 20px",
      }}
    >
      <h2
        style={{
          fontFamily: "'Very Popular', 'Poppins', sans-serif",
          fontSize: "43px", 
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "2px 2px 0px #000, 0 4px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        Alfonomics
      </h2>

      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "500px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pie data={data} options={options} />
      </div>

      <div
        style={{
          fontWeight: "bold",
          marginTop: "20px",
          textAlign: "left",
          color: "#ffffff",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px", 
          lineHeight: "1.6",
        }}
      >
        <h3
          style={{
            textTransform: "uppercase",
            fontSize: "18px", 
            letterSpacing: "1px",
            marginBottom: "10px",
            color: "#00FFA8",
          }}
        >
          Token Distribution Details
        </h3>
        <h3
          style={{
            textTransform: "uppercase",
            fontSize: "16px", 
            letterSpacing: "1px",
            marginBottom: "10px",
            color: "rgb(255, 255, 255)",
          }}
        >
          Supply: 100,000,000
        </h3>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tokenDetails.map((detail, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                borderLeft: `4px solid ${detail.color}`,
                paddingLeft: "10px",
              }}
            >
              <strong style={{ fontSize: "16px", color: detail.color }}>
                {detail.name} ({detail.percentage}%):
              </strong>
              <p style={{ margin: 0 }}>{detail.description}</p>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "center" }}>Allocation of 7500 ALPH to the treasury 💰</p>
      </div>
    </div>
  );
};

export default TokenomicsChart;
