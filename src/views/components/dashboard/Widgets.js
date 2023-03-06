import { useMemo } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Widgets({ chartTitles, data }) {
  const totals = useMemo(() => {
    return data.reduce(
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
  }, [data]);

  const affichageTotalPoints = (index) => {
    if (totals[index] > 175) {
      return (
        <Typography variant="body2">
          {totals[index]}/350 points marqués <ArrowUpwardIcon />
        </Typography>
      );
    } else if (totals[index] < 175) {
      return (
        <Typography variant="body2">
          {totals[index]}/350 points marqués <ArrowDownwardIcon />
        </Typography>
      );
    } else {
      return (
        <Typography variant="body2">
          {totals[index]}/350 points marqués
        </Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 5,
        marginLeft: 20,
      }}
    >
      {chartTitles.map((title, index) => (
        <Card key={title} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
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
