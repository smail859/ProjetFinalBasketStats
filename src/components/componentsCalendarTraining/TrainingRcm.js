import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import CalculData from "../CalculData";
import "./trainingRcm.css";

function TrainingRcm({
  title,
  data,
  buttonText,
  listClassName,
  cardClassName,
}) {
  const [selectedTraining, setSelectedTraining] = useState([]);
  const [newTrainings, setNewTrainings] = useState([]);
  // état local qui gère l'affichage ou non de l'alerte de succès de suppression
  const [showAlert, setShowAlert] = useState(false);

  const handleTrainingSelection = (event) => {
    const { name, checked } = event.target;
    const trainingName = { name, checked };
    setSelectedTraining((prev) => [
      ...prev.filter((item) => item.name !== name),
      trainingName,
    ]);
    console.log("Entraînements ajoutés :", trainingName);
  };

  const handleAddTraining = (event) => {
    event.preventDefault();
    const selected = selectedTraining
      .filter((item) => item.checked) // filtre les entrainements sélectionnés qui ont leur attribut "checked" à true
      .map((item) => item.name); // extrait le nom des entrainements sélectionnés
    setNewTrainings((prev) => [...prev, ...selected]); // ajoute les noms des entrainements sélectionnés à la liste des nouveaux entrainements
    setSelectedTraining([]); // vide la liste des entrainements sélectionnés
    console.log("Entraînements ajoutés :", selected); // affiche la liste des noms des entrainements ajoutés dans la console
    setShowAlert(true);
  };

  return (
    <Card className={cardClassName}>
      <CardContent className="card_content_training_rcm">
        {title && <Typography variant="h5">{title}</Typography>}
        {showAlert && (
          <Alert severity="success">
            <AlertTitle>
              Entrainement a été ajouté : {newTrainings.join(", ")}
            </AlertTitle>
          </Alert>
        )}
        <CalculData
          data={data}
          onChange={handleTrainingSelection}
          onClick={handleAddTraining}
          className={listClassName}
          buttonText={buttonText}
        />
      </CardContent>
    </Card>
  );
}

TrainingRcm.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  buttonText: PropTypes.string,
  listClassName: PropTypes.string,
  cardClassName: PropTypes.string,
};

export default TrainingRcm;
