// MATERIAL UI
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
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

  // Etat pour stocker le training à supprimer
  const [trainingToDelete, setTrainingToDelete] = useState(null);

  // Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression d'un entrainement conseillé ou sélectionné
  const handleDeleteDialog = (training) => {
    setTrainingToDelete(training);
  };

  // Fonction appelée lorsque l'utilisateur confirme la suppression
  const handleDeleteConfirmed = () => {
    // Supprime l'entrainement de la liste
    if (trainingToDelete.type === "new") {
      dispatch(deleteTraining({ type: "new", id: trainingToDelete.id }));
    } else if (trainingToDelete.type === "selected") {
      dispatch(deleteTraining({ type: "selected", id: trainingToDelete.id }));
    }
    // Ferme le dialog
    setTrainingToDelete(null);
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
              <CustomButton
                onClick={() =>
                  handleDeleteDialog({
                    type: "new",
                    id: trainingRcm.id,
                    name: trainingRcm.name,
                  })
                }
              >
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
                onClick={() =>
                  handleDeleteDialog({
                    type: "selected",
                    id: selectedTraining.id,
                    name: selectedTraining.name,
                  })
                }
              >
                Supprimer
              </CustomButton>
            </ListItem>
          </List>
        ))}

        {/* Dialog de confirmation de suppression */}
        <Dialog
          open={!!trainingToDelete}
          onClose={() => setTrainingToDelete(null)}
        >
          <DialogTitle>Confirmation de suppression</DialogTitle>
          <DialogContent>
            Êtes-vous sûr de vouloir supprimer l'entraînement "
            {trainingToDelete?.name}" ?
          </DialogContent>
          <DialogActions>
            <CustomButton onClick={() => setTrainingToDelete(null)}>
              Annuler
            </CustomButton>
            <CustomButton onClick={handleDeleteConfirmed} autoFocus>
              Supprimer
            </CustomButton>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
}
export default CalendarInfos;
