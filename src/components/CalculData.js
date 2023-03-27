import { Typography, Checkbox } from "@mui/material";
import { useMemo } from "react";
import CustomButton from "./buttons/Button";
import titles from "../assets/title.json";

function CalculData({ data, onChange, onClick }) {
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
      if (total < 175) {
        return (
          <>
            <Typography variant="h6">
              {titles[index].name}{" "}
              <Checkbox name={titles[index].name} onChange={onChange} />
            </Typography>
          </>
        );
      }
    });
  };

  return (
    <>
      {render(totalPoints)}{" "}
      <CustomButton onClick={onClick}>Ajouter</CustomButton>
    </>
  );
}

export default CalculData;
