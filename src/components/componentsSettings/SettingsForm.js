import React from "react";
import "./settingsC.css";
import CustomButton from "../buttons/Button";
import { TextField, Card, List, Typography } from "@mui/material";

function SettingsForm({ pseudo, email, password, adresse, onClick }) {
  // Le composant SettingsForm prend les props pseudo, email, password, adresse et onClick.

  return (
    <Card className="parametre-container">
      <div className="content_list">
        <List className="parametre-row">
          <Typography className="parametre-label">Pseudo:</Typography>
          <TextField
            className="parametre-value"
            type="pseudo"
            label={pseudo}
            name="pseudo"
          />
        </List>
        <List className="parametre-row">
          <Typography className="parametre-label">Adresse mail:</Typography>
          <TextField
            className="parametre-value"
            type="pseudo"
            label={email}
            name="email"
          />
        </List>
      </div>
      <div className="content_list">
        <List className="parametre-row">
          <Typography className="parametre-label">Mot de passe:</Typography>
          <TextField
            className="parametre-value"
            type="pseudo"
            label={password}
            name="password"
          />
        </List>
        <List className="parametre-row">
          <Typography className="parametre-label">Adresse:</Typography>
          <TextField
            className="parametre-value"
            type="pseudo"
            label={adresse}
            name="password"
          />
        </List>
      </div>
      <CustomButton className="deconnexion-button" onClick={onClick}>
        Déconnexion
      </CustomButton>
    </Card>
  );
}

export default SettingsForm;
