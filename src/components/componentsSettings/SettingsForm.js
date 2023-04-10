// REACT
import { useState } from "react";
// MATERIAL UI
import { TextField, Card, List, Typography } from "@mui/material";
// MATERIAL ICONS
import { Edit, Check } from "@mui/icons-material";
// COMPONENTS
import CustomButton from "../buttons/Button";
// STYLE
import "./settingsC.css";

function SettingsForm({ pseudo, email, password, adresse, onClick }) {
  const [isEditing, setIsEditing] = useState(false);
  const [pseudoValue, setPseudoValue] = useState(pseudo);
  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState(password);
  const [adresseValue, setAdresseValue] = useState(adresse);

  return (
    <Card className="parametre-container">
      <Typography className="personal-info">
        Informations Personelles
      </Typography>

      <div className="content_list">
        <List className="parametre-row">
          <TextField
            className="parametre-value"
            type="text"
            value={pseudoValue}
            onChange={(e) => setPseudoValue(e.target.value)}
            disabled={!isEditing}
          />
        </List>
        <List className="parametre-row">
          <TextField
            className="parametre-value"
            type="text"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            disabled={!isEditing}
          />
        </List>
      </div>
      <div className="content_list">
        <List className="parametre-row">
          <TextField
            className="parametre-value"
            type="text"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            disabled={!isEditing}
          />
        </List>
        <List className="parametre-row">
          <TextField
            className="parametre-value"
            type="text"
            value={adresseValue}
            onChange={(e) => setAdresseValue(e.target.value)}
            disabled={!isEditing}
          />
        </List>
      </div>

      <CustomButton className="deconnexion-button" onClick={onClick}>
        Déconnexion
      </CustomButton>
      <div className="edit-icon" onClick={() => setIsEditing(!isEditing)}>
        <Typography>Modifie tes informations</Typography>
        {isEditing ? <Check /> : <Edit />}
      </div>
    </Card>
  );
}

export default SettingsForm;
