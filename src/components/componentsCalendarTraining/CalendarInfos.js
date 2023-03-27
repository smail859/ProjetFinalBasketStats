import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  List,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useState } from "react";

import "./calendarInfos.css";

// Composant qui affiche des informations sur les prochains entrainements et permet de supprimer un entrainement

function CalendarInfos({ title, recommendedTraining, selectedTraining }) {
  // Etat local qui stocke les entrainements
  const [trainings, setTrainings] = useState([]);

  // Etat local qui gère l'affichage ou non de l'alerte de succès de suppression
  const [alert, setAlert] = useState(false);

  // Etat local qui stocke le nom de l'entrainement qui a été supprimé
  const [deletedTraining, setDeletedTraining] = useState("");

  // Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression d'un entrainement
  const handleDelete = (training) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer l'entraînement "${training}" ?`
      )
    ) {
      // Affiche un message dans la console pour confirmer la suppression
      console.log(`Entraînement supprimé ${training}`);

      // Supprime l'entrainement de la liste
      setTrainings(
        trainings.filter((traininRemove) => training !== traininRemove)
      );

      // Affiche une alerte de succès de suppression
      setDeletedTraining(training);
      setAlert(true);
    }
  };

  return (
    // Affiche les informations sur les prochains entrainements et les boutons de suppression
    <Card className="card_container">
      <CardContent className="content_infos">
        <Typography className="title" variant="h5">
          {title}
        </Typography>

        {/* Affiche l'alerte si un entrainement a été supprimé */}
        {alert && (
          <Alert severity="success">
            <AlertTitle>Entrainement supprimé : {deletedTraining} </AlertTitle>
          </Alert>
        )}

        <Typography className="subtitle" variant="subtitle1">
          Prochain Entrainement Conseillé :
        </Typography>

        <List className="list">
          <ListItem>
            <ListItemText primary="Tir a 2 points" />
            <Button onClick={() => handleDelete(recommendedTraining)}>
              Supprimer
            </Button>
          </ListItem>
        </List>

        <Typography className="subtitle" variant="subtitle1">
          Prochain Entrainement Sélectionné :
        </Typography>

        <List className="list">
          <ListItem>
            <ListItemText primary="Tir a 3 points" />
            <Button onClick={() => handleDelete(selectedTraining)}>
              Supprimer
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default CalendarInfos;
