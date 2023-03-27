import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Alert,
  AlertTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import titles from "../../assets/title.json";
import CustomButton from "../buttons/Button";
import "./training.css";

function Training({ title, buttonText, checkboxClassName, buttonClassName }) {
  // initialisation d'un tableau vide pour stocker les entrainements sélectionnés
  const [selectedTraining, setSelectedTraining] = useState([]);

  /// initialisation d'un tableau vide pour stocker les nouveaux entrainements ajoutés
  const [newTrainings, setNewTrainings] = useState([]);

  // état local qui gère l'affichage ou non de l'alerte de succès de suppression
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  // fonction appelée lorsqu'un entrainement est sélectionné
  const handleTrainingSelection = (event) => {
    const { name, checked } = event.target;
    const newTraining = { name, checked };
    setSelectedTraining((prev) => [
      ...prev.filter((item) => item.name !== name),
      newTraining,
    ]);
  };
  // fonction appelée lorsqu'un bouton "Ajouter" est cliqué
  const handleAddTraining = (event) => {
    event.preventDefault();
    const selected = selectedTraining
      .filter((item) => item.checked) // filtre les entrainements sélectionnés qui ont leur attribut "checked" à true
      .map((item) => item.name); // extrait le nom des entrainements sélectionnés
    setNewTrainings((prev) => [...prev, ...selected]); // ajoute les noms des entrainements sélectionnés à la liste des nouveaux entrainements
    setSelectedTraining([]); // vide la liste des entrainements sélectionnés
    console.log("Entraînements ajoutés :", selected); // affiche la liste des noms des entrainements ajoutés dans la console
    handleShowAlert();
  };

  return (
    <>
      <Card className="card_training">
        <CardContent className="card_content_training">
          <Typography variant="h4"> {title} </Typography>

          {showAlert && (
            <Alert severity="success">
              <AlertTitle>
                Entrainement a été ajouté : {newTrainings}{" "}
              </AlertTitle>
            </Alert>
          )}
          {titles.map((title, index) => (
            <>
              <Typography key={index}>{title.name}</Typography>
              <Checkbox
                name={titles[index].name}
                onChange={handleTrainingSelection}
                className={checkboxClassName}
              />
            </>
          ))}
        </CardContent>

        <CustomButton onClick={handleAddTraining} className={buttonClassName}>
          {buttonText}
        </CustomButton>
      </Card>
    </>
  );
}

Training.propTypes = {
  title: PropTypes.string,
  onSelection: PropTypes.func,
  onAdd: PropTypes.func,
  buttonText: PropTypes.string,
  checkboxClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Training;
