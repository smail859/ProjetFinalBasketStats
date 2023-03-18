import { useState, useEffect } from "react";
import axios from "axios";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function MessagingNotif() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2cc5f56028a583d2a3757667042a9724`,
      };
      const response = await axios.request(options);
      setWeather(response.data);
    };
    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
    e.target[0].value = "";
  };

  const renderWeather = () => {
    if (weather && weather.main) {
      if (weather.main.temp > 15) {
        return (
          <Typography>
            <WbSunnyIcon />
            N'oublie pas de t'hydrater
          </Typography>
        );
      } else {
        return (
          <Typography>
            {" "}
            <AcUnitIcon />
            Il fait un peu frais, prends une veste
          </Typography>
        );
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 500,
      }}
    >
      <Card>
        <Typography>
          {" "}
          <AddAlertIcon /> Entrer votre ville
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField />
            <Button type="submit">Envoyer</Button>
          </form>

          {weather && (
            <Typography>
              {weather.name}, {weather.sys.country}
            </Typography>
          )}
          {weather && <Typography>{weather.main.temp} °C</Typography>}

          <Typography>
            {" "}
            <SportsBasketballIcon /> Conseil
          </Typography>
          {renderWeather()}
        </CardContent>
      </Card>
    </Box>
  );
}

export default MessagingNotif;
