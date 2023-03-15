import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import data from "../../assets/data.json";
import titles from "../../assets/title.json";

function Widgets() {
  const [dataPoints, setDataPoints] = useState(data);

  const totalPoints = useMemo(() => {
    if (dataPoints.length > 0) {
      return dataPoints.reduce(
        (acc, monthData) => {
          return [
            acc[0] + monthData.data0,
            acc[1] + monthData.data1,
            acc[2] + monthData.data2,
            acc[3] + monthData.data3,
            acc[4] + monthData.data4,
          ];
        },
        [0, 0, 0, 0, 0]
      );
    } else {
      return [0, 0, 0, 0, 0];
    }
  }, [dataPoints]);

  useEffect(() => {
    const fetchDataPoints = async () => {
      try {
        const response = await fetch("/assets/data.json");
        const jsonData = await response.json();
        setDataPoints(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPoints();
  }, []);

  const affichageTotalPoints = (index) => {
    const total = totalPoints[index];
    if (total > 175) {
      return (
        <Typography variant="body2">
          {total}/350 points marqués <ArrowUpwardIcon />
        </Typography>
      );
    } else if (total < 175) {
      return (
        <Typography variant="body2">
          {total}/350 points marqués <ArrowDownwardIcon />
        </Typography>
      );
    } else {
      return (
        <Typography variant="body2">{total}/350 points marqués</Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 20,
      }}
    >
      {titles.map((title, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total
            </Typography>
            {affichageTotalPoints(index)}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Widgets;
