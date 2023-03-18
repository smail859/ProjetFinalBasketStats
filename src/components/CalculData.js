import { Typography } from "@mui/material";
import { useMemo } from "react";
import TrainingSelector from "./TrainingSelector";

function CalculData({
  title,
  data,
  handleTrainingSelection,
  handleAddTraining,
}) {
  const totalPoints = useMemo(() => {
    if (data.length > 0) {
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
    } else {
      return [0, 0, 0, 0, 0];
    }
  }, [data]);

  const render = (totalPoints) => {
    return totalPoints.map((total, index) => {
      console.log(total);
      if (total < 175) {
        return (
          <TrainingSelector
            handleTrainingSelection={handleTrainingSelection}
            handleAddTraining={handleAddTraining}
            key={index}
          />
        );
      } else {
        return (
          <Typography key={index}>Aucun entraînement conseillé </Typography>
        );
      }
    });
  };

  //   console.log(totalPoints);

  return <>{render(totalPoints)}</>;
}

export default CalculData;
