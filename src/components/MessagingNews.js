import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function MessagingNews() {
  const [teamsData, setTeamsData] = useState();
  const [gamesData, setGamesData] = useState();
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    const fetchTeamshData = async () => {
      const options = {
        method: "GET",
        url: `https://free-nba.p.rapidapi.com/teams`,
        headers: {
          "X-RapidAPI-Key":
            "47bc6e9931mshfc2beba9e5b4639p1c8b95jsn4273b4ceabb7",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setTeamsData(response.data);
    };
    const fetchScoresData = async () => {
      const options = {
        method: "GET",
        url: "https://free-nba.p.rapidapi.com/games",
        params: { page: "0", per_page: "10", Seasons: "2018" },
        headers: {
          "X-RapidAPI-Key":
            "47bc6e9931mshfc2beba9e5b4639p1c8b95jsn4273b4ceabb7",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      console.log(response.data);
    };

    fetchTeamshData();
    fetchScoresData();
  }, [teamName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeamName(e.target[0].value.toLowerCase());
    e.target[0].value = "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 500,
        margin: 50,
      }}
    >
      <Card>
        <Typography>Choisis l'actualité de l'équipe que tu veux</Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField />
            <Button type="submit">Envoyer</Button>
          </form>
          <Typography>
            Equipe selectioné {teamsData && teamName.full_name}
          </Typography>
          <Typography>Dernier Match : </Typography>
          {gamesData && <Typography>{gamesData.date}</Typography>}
          {gamesData && (
            <Typography>{gamesData.home_team.full_name}</Typography>
          )}
          {gamesData && (
            <Typography>
              {gamesData.home_team.full_name} vs{" "}
              {gamesData.visitor_team.full_name}
            </Typography>
          )}
          {gamesData && (
            <Typography>
              {gamesData.home_home_team_score} - {gamesData.visitor_team_score}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default MessagingNews;
