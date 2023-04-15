// REACT
import { useState } from "react";
// MATERIAL UI
import { Card, Box, CardContent, Typography } from "@mui/material";
// COMPONENTS
import ScoreCard from "../components/componentsDashboardSignUp/ScoreCard";
import CustomButton from "../components/buttons/Button";
// JSON
import titles from "../assets/title.json";
// STYLE
import "../styles/dashboardSignUp.css";

function DashboardSignUp() {
  // Initialiser le state pour les scores avec des objets vides
  const [scores, setScores] = useState(
    titles.map(() => ({
      score1: "",
      score2: "",
    }))
  );

  // Fonction pour changer les scores
  const handleScoreChange = (event, index, field) => {
    const newScores = [...scores];
    // Modifier le score correspondant à l'index et au champ (score1 ou score2)
    newScores[index][field] = event.target.value;
    setScores(newScores);
  };

  // Fonction pour envoyer les scores
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
        {/* Mapper les titres et afficher un ScoreCard pour chaque titre */}
        {titles.map((title, index) => (
          <Box key={index} sx={{ display: "inline-block" }}>
            <ScoreCard
              title={title.name}
              score1={scores[index].score1}
              score2={scores[index].score2}
              onChange={(event, field) =>
                handleScoreChange(event, index, field)
              }
            />
          </Box>
        ))}

        {/* Bouton pour envoyer les données */}
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
