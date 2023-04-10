// REACT
import { useState } from "react";
// MATERIAL UI
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Alert,
  AlertTitle,
} from "@mui/material";
// PROPS
import PropTypes from "prop-types";
// JSON
import trainingTitles from "../../assets/title.json";
// COMPONENTS
import CustomButton from "../buttons/Button";
// REDUX
import { selectedTrainings } from "../../redux/reducers";
import { useDispatch } from "react-redux";
// STYLE
import "./training.css";

function Training({ title, buttonText, checkboxClassName, buttonClassName }) {
  const [trainingCheck, setTrainingCheck] = useState([]);
  const [addedTrainingName, setAddedTrainingName] = useState("");
  const dispatch = useDispatch();

  const handleToggle = (name) => {
    if (trainingCheck.includes(name)) {
      setTrainingCheck(trainingCheck.filter((t) => t !== name));
    } else {
      setTrainingCheck([...trainingCheck, name]);
    }
  };
  const handleAddTraining = () => {
    dispatch(selectedTrainings(trainingCheck));
    setAddedTrainingName(trainingCheck.join(", "));
    setTrainingCheck([]);
    setShowAlert(true);
  };
  // état local qui gère l'affichage ou non de l'alerte de succès de suppression
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="training">
      <Card className="card_training">
        <CardContent className="card_content_training">
          <Typography variant="h4"> {title} </Typography>

          {showAlert && (
            <Alert severity="success">
              <AlertTitle>
                {`entraînements ont été ajoutés : ${addedTrainingName}`}
              </AlertTitle>
            </Alert>
          )}
          {trainingTitles.map((trainingTitle) => (
            <>
              <Typography>{trainingTitle.name}</Typography>
              <Checkbox
                name={trainingTitle.name}
                onChange={() => handleToggle(trainingTitle.name)}
                className={checkboxClassName}
              />
            </>
          ))}
        </CardContent>

        <CustomButton onClick={handleAddTraining} className={buttonClassName}>
          {buttonText}
        </CustomButton>
      </Card>
    </div>
  );
}

Training.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  checkboxClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Training;
