import { useState } from "react";
import { Card } from "@mui/material";
import NavBar from "../components/NavBar";
import Chart from "../components/componentsDashboardLogin/Chart";
import Widgets from "../components/componentsDashboardLogin/Widgets";
import StatFormControl from "../components/componentsDashboardLogin/StatFormControl";
import data from "../assets/data.json";
import title from "../assets/title.json";

function DashboardLogin() {
  const [dataPoints, setDataPoints] = useState(data);
  const [selectedChartIndex, setSelectedChartIndex] = useState(0);

  const handleStatChange = (newData) => {
    setDataPoints(newData);
  };

  const handleChartIndexChange = (index) => {
    setSelectedChartIndex(index);
  };

  const showAllCharts = () => {
    setSelectedChartIndex("all");
  };

  return (
    <div>
      <NavBar />
      <Widgets data={dataPoints} />
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 400,
          margin: 30,
        }}
      >
        {selectedChartIndex !== null && selectedChartIndex !== "all" && (
          <Chart data={data} title={title} chartIndex={selectedChartIndex} />
        )}
        {selectedChartIndex === "all" && (
          <Chart data={data} title={title} chartIndex="all" />
        )}
        <StatFormControl
          onStatChange={handleStatChange}
          onChartIndexChange={handleChartIndexChange}
          data={data}
          showAllCharts={showAllCharts}
        />
      </Card>
    </div>
  );
}

export default DashboardLogin;
