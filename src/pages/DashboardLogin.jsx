import { useState } from "react";
import { Card } from "@mui/material";
import Chart from "../components/componentsDashboardLogin/Chart";
import Widgets from "../components/componentsDashboardLogin/Widgets";
import StatFormControl from "../components/componentsDashboardLogin/StatFormControl";
import data from "../assets/data.json";
import title from "../assets/title.json";
import "../styles/dashboardLogin.css";

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
      <Widgets dataPoints={dataPoints} />
      <Card className="chart-container">
        {selectedChartIndex !== null && selectedChartIndex !== "all" && (
          <Chart
            className="chart"
            data={data}
            title={title}
            chartIndex={selectedChartIndex}
          />
        )}
        {selectedChartIndex === "all" && (
          <Chart className="chart" data={data} title={title} chartIndex="all" />
        )}
        <StatFormControl
          onStatChange={handleStatChange}
          onChartIndexChange={handleChartIndexChange}
          data={data}
          showAllCharts={showAllCharts}
          className="stat-container"
        />
      </Card>
    </div>
  );
}

export default DashboardLogin;
