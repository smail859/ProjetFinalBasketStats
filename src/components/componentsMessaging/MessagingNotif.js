import { useState, useEffect } from "react";
import axios from "axios";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import "./messagingNotif.css";

import { Card, CardContent, Typography, TextField } from "@mui/material";
import CustomButton from "../buttons/Button";

function MessagingNotif({ apiKey }) {
  const [weather, setWeather] = useState(); // état qui contient les données météorologiques
  const [city, setCity] = useState(); // état qui contient la ville sélectionnée par l'utilisateur

  useEffect(() => {
    // effet de bord qui sera exécuté à chaque mise à jour de apiKey ou city
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, // appel de l'API météorologique
      };
      const response = await axios.request(options);
      setWeather(response.data); // mise à jour de l'état weather avec les données reçues de l'API
    };
    if (city) {
      // si la ville a été sélectionnée, on lance la récupération des données météo
      fetchWeather();
    }
  }, [apiKey, city]);

  const handleSubmit = (e) => {
    // gestionnaire d'événement qui sera appelé lors de la soumission du formulaire
    e.preventDefault();
    setCity(e.target[0].value); // mise à jour de l'état city avec la ville entrée par l'utilisateur
    e.target[0].value = "";
  };

  const renderWeather = () => {
    // fonction qui retourne le message météo en fonction de la température
    if (weather && weather.main) {
      if (weather.main.temp > 15) {
        // si la température est supérieure à 15 degrés Celsius
        return (
          <Typography>
            <WbSunnyIcon />
            N'oublie pas de t'hydrater
          </Typography>
        );
      } else {
        // si la température est inférieure ou égale à 15 degrés Celsius
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
    <div className="notif_container">
      <Card className="notif_card">
        <Typography variant="h4">La Méteo</Typography>
        <CardContent className="notif_content">
          <Typography>
            <form className="notif_form" onSubmit={handleSubmit}>
              <ThermostatIcon />
              <TextField placeholder="Entrez votre ville " />
              <CustomButton
                backgroundColor="#f47b06"
                textColor="#ffffff"
                type="submit"
              >
                Envoyer
              </CustomButton>
            </form>
          </Typography>

          <div className="weather">
            {weather && (
              <Typography>
                {weather.name}, {weather.sys.country}
              </Typography>
            )}
            {weather && <Typography>{weather.main.temp} °C</Typography>}
          </div>
          <Typography>
            {" "}
            <TipsAndUpdatesIcon /> Conseil
          </Typography>
          <div className="weather">{renderWeather()}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MessagingNotif;
