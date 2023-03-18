import { useState } from "react";
import "../styles/dashboardSignUp.css";
import { Card, Box, CardContent, Button, Typography } from "@mui/material";
import ScoreCard from "../components/componentsDashboardSignUp/ScoreCard";
import titles from "../assets/title.json";

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
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 400,
        margin: 30,
      }}
    >
      <CardContent>
        <Box>
          <Typography color="text.primary" gutterBottom>
            Entrainements par défaut
          </Typography>
        </Box>
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button type="submit" onClick={handleClick}>
            Envoyées les données
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardSignUp;
