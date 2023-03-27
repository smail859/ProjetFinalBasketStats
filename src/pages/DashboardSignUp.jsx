import { useState } from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import ScoreCard from "../components/componentsDashboardSignUp/ScoreCard";
import titles from "../assets/title.json";
import "../styles/dashboardSignUp.css";
import CustomButton from "../components/buttons/Button";

function DashboardSignUp() {
  const [scores, setScores] = useState(
    titles.map(() => ({
      score1: "",
      score2: "",
    }))
  );

  const handleScoreChange = (event, index, field) => {
    const newScores = [...scores];
    newScores[index][field] = event.target.value;
    setScores(newScores);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(scores);
  };

  return (
    <Card className="card_dashboard">
      <CardContent className="card_content_dashboard">
        <Typography
          className="card_title_dashboard"
          color="text.primary"
          gutterBottom
        >
          Entrainements par défaut
        </Typography>
        {titles.map((title, index) => (
          <Box key={index} sx={{ display: "inline-block" }}>
            <ScoreCard
              title={title.name}
              score1={scores[index].score1}
              score2={scores[index].score2}
              onScoreChange={(event, field) =>
                handleScoreChange(event, index, field)
              }
            />
          </Box>
        ))}

        <Box className="button_dashboard">
          <CustomButton type="submit" onClick={handleClick}>
            Envoyées les données
          </CustomButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardSignUp;
