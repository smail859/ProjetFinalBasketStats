import { useState } from "react";

import "./dashbordSignUp.css";
import {
  Card,
  TextField,
  Box,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";

function DashboardSignUp() {
  const titles = [
    "Tir 2 Points",
    "Tir 3 Points",
    "Layup MG",
    "Layup MD",
    "Lancer Franc",
  ];

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
            Entrainements par defaut
          </Typography>
        </Box>

        {titles.map((title, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
            }}
          >
            <Card
              sx={{
                width: 200,
                margin: 4,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://picsum.photos/200/100/"
                />
                <Typography>{title}</Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  id={`Score1-${index}`}
                  size="small"
                  label="Enter ton score  sur 50"
                  variant="standard"
                  value={scores[index].score1}
                  onChange={(event) =>
                    handleScoreChange(event, index, "score1")
                  }
                />

                <TextField
                  fullWidth
                  margin="normal"
                  size="small"
                  id={`Score2-${index}`}
                  label="Enter ton score  sur 50"
                  variant="standard"
                  value={scores[index].score2}
                  onChange={(event) =>
                    handleScoreChange(event, index, "score2")
                  }
                />
              </CardContent>
            </Card>
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
