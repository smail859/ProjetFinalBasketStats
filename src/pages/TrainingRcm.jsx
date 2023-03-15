import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import CardTraining from "../components/componentsTraining/CardTraining";
import "../styles/training.css";

function TrainingRcm() {
  const MIN_SCORE = 175;
  const [selectAllChecked, setSelectAllChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSelectAllChange = (index, checked) => {
    setSelectAllChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = checked;
      return newState;
    });
  };

  const dataPointsTotal = useMemo(() => {
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
  }, []);

  const renderRcm = () => {
    const cards = [];

    for (let i = 0; i < chartTitles.length; i++) {
      const dataValue = dataPointsTotal[i];
      const isBelowMin = dataValue < MIN_SCORE;
      const isAboveMax = dataValue > MIN_SCORE;
      const isAtMin = dataValue === MIN_SCORE;

      const cardContent = isBelowMin ? (
        <Typography>
          {chartTitles[i]}
          {dataValue >= 175 ? null : (
            <Checkbox
              checked={selectAllChecked[i]}
              onChange={(event) =>
                handleSelectAllChange(i, event.target.checked)
              }
            />
          )}
        </Typography>
      ) : isAboveMax ? (
        <Typography>
          {chartTitles[i]} : Pas d'entraînements conseillés, vous avez un score
          au-dessus de
          {MIN_SCORE}.
        </Typography>
      ) : isAtMin ? (
        <Typography>
          {chartTitles[i]} : Entraînement conseillé, mais vous êtes déjà à un
          score de {MIN_SCORE}.
        </Typography>
      ) : null;

      if (cardContent) {
        cards.push(cardContent);
      }
    }

    if (cards.length > 0) {
      return (
        <Card>
          <CardContent>
            {cards.map((card, index) => (
              <Box
                key={`rcm-${index}`}
                sx={{
                  display: "flex",
                  padding: 2,
                }}
              >
                {card}
              </Box>
            ))}
          </CardContent>
          <CardActions>
            <Button variant="text">Ajouter</Button>
          </CardActions>
        </Card>
      );
    }

    return null;
  };

  return (
    <Box className="box">
      {renderRcm()}
      <CardTraining />
    </Box>
  );
}

export default TrainingRcm;
