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
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
      };
      const response = await axios.request(options);
      setWeather(response.data);
    };
    if (city) {
      fetchWeather();
    }
  }, [apiKey, city]);

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
