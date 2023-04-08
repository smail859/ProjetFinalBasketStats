// MATERIAL UI
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
// COMPONENTS
import CustomButton from "../buttons/Button";
// STYLE
import "./calendarInfos.css";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { deleteTraining } from "../../redux/reducers";

// Composant qui affiche des informations sur les prochains entrainements et permet de supprimer un entrainement
function CalendarInfos({ title }) {
  const dispatch = useDispatch();

  const newTrainings = useSelector((state) => state.training.newTrainings);
  const selectedTrainings = useSelector(
    (state) => state.training.selectedTrainings
  );

  // Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression d'un entrainement conseillé
  const handleDelete = (trainingRcm) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer l'entraînement "${trainingRcm.name}" ?`
      )
    ) {
      // Affiche un message dans la console pour confirmer la suppression
      console.log(`Entraînement supprimé ${trainingRcm}`);
      // Supprime l'entrainement de la liste
      dispatch(deleteTraining({ type: "new", id: trainingRcm.id }));
    }
  };
  // Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression d'un entrainement par defaut
  const handleDeleteSelected = (selectedTraining) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer l'entraînement "${selectedTraining.name}" ?`
      )
    ) {
      // Affiche un message dans la console pour confirmer la suppression
      console.log(`Entraînement supprimé ${selectedTraining}`);
      // Supprime l'entrainement de la liste
      dispatch(deleteTraining({ type: "selected", id: selectedTraining.id }));
    }
  };

  return (
    <Card className="card_container">
      <CardContent className="content_infos">
        <Typography className="title" variant="h5">
          {title}
        </Typography>

        <Typography className="subtitle" variant="subtitle1">
          Prochain Entrainement Conseillé :
        </Typography>

        {newTrainings.map((trainingRcm) => (
          <List key={trainingRcm.id} className="list">
            <ListItem>
              <ListItemText primary={trainingRcm.name} />
              <CustomButton onClick={() => handleDelete(trainingRcm)}>
                Supprimer
              </CustomButton>
            </ListItem>
          </List>
        ))}

        <Typography className="subtitle" variant="subtitle1">
          Prochain Entrainement Sélectionné :
        </Typography>

        {selectedTrainings.map((selectedTraining) => (
          <List key={selectedTraining.id} className="list">
            <ListItem>
              <ListItemText primary={selectedTraining.name} />
              <CustomButton
                onClick={() => handleDeleteSelected(selectedTraining)}
              >
                Supprimer
              </CustomButton>
            </ListItem>
          </List>
        ))}
      </CardContent>
    </Card>
  );
}

export default CalendarInfos;
