import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import CalculData from "../CalculData";
import titles from "../../assets/title.json";
import "./trainingRcm.css";
import { useDispatch } from "react-redux";
import { addNewTrainings } from "../../redux/reducers";

function TrainingRcm({
  title,
  data,
  buttonText,
  listClassName,
  cardClassName,
}) {
  // Récupère le dispatcher de Redux
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [trainingCheck, setTrainingCheck] = useState([]);
  const [addedTrainingName, setAddedTrainingName] = useState("");
  const handleToggle = (event) => {
    const { name } = event.target;
    setTrainingCheck((prevTrainingCheck) => prevTrainingCheck.concat(name));
  };
  const handleAdd = () => {
    if (trainingCheck.length > 0) {
      dispatch(addNewTrainings(trainingCheck));
      setAddedTrainingName(trainingCheck.join(", "));
      setTrainingCheck([]);
      setShowAlert(true);
    }
  };
  // Afficher l'alerte avec la dernière formation ajoutée
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
    <Card className={cardClassName}>
      <CardContent className="card_content_training_rcm">
        {/* Affiche le titre s'il est défini */}
        {title && <Typography variant="h5">{title}</Typography>}
        {/* Affiche un message d'alerte s'il y a eu ajout d'un nouvel entrainement */}
        {showAlert && (
          <Alert severity="success">
            <AlertTitle>
              Nouvel entraînement ajouté: {addedTrainingName}
            </AlertTitle>
          </Alert>
        )}

        {/* Appel du composant CalculData pour afficher les données */}
        <>
          <CalculData
            trainingName={titles}
            data={data}
            onChange={handleToggle}
            onClick={handleAdd}
            className={listClassName}
            buttonText={buttonText}
          />
        </>
      </CardContent>
    </Card>
  );
}

// Propriétés attendues par le composant TrainingRcm
TrainingRcm.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  buttonText: PropTypes.string,
  listClassName: PropTypes.string,
  cardClassName: PropTypes.string,
};

export default TrainingRcm;
