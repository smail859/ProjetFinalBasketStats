import { useState } from "react";
import NavBar from "../components/NavBar";
import Chart from "../components/Chart";
import Widgets from "../components/Widgets";
import "../styles/dashboardSignUp.css";
import {
  Card,
  CardContent,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

function DashboardLogin() {
  const [selectedChartIndex, setSelectedChartIndex] = useState(0);

  const chartTitles = [
    "Tir 2 Points",
    "Tir 3 Points",
    "Layup MG",
    "Layup MD",
    "Lancer Franc",
  ];

  const dataPoints = [
    {
      name: "Janvier",
      data0: 10,
      data1: 20,
      data2: 30,
      data3: 15,
      data4: 5,
    },
    {
      name: "Février",
      data0: 12,
      data1: 25,
      data2: 20,
      data3: 10,
      data4: 10,
    },
    {
      name: "Mars",
      data0: 1,
      data1: 15,
      data2: 55,
      data3: 5,
      data4: 15,
    },
    {
      name: "Mai",
      data0: 1,
      data1: 15,
      data2: 25,
      data3: 5,
      data4: 15,
    },
    {
      name: "Juin",
      data0: 1,
      data1: 15,
      data2: 25,
      data3: 5,
      data4: 15,
    },
    {
      name: "Juillet",
      data0: 1,
      data1: 15,
      data2: 25,
      data3: 5,
      data4: 15,
    },
  ];

  const chartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const selectedDataKey = `data${selectedChartIndex}`;

  return (
    <div>
      <NavBar />
      <Widgets chartTitles={chartTitles} data={dataPoints} />
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 400,
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              name="radio-chartTitles"
              value={selectedChartIndex.toString()}
              onChange={(event) =>
                setSelectedChartIndex(parseInt(event.target.value))
              }
            >
              {chartTitles.map((title, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio />}
                  label={title}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>

        <CardContent>
          <Chart
            data={dataPoints}
            xDataKey="name"
            yDataKey={selectedDataKey}
            chartTitles={chartTitles}
            chartColors={chartColors}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardLogin;
