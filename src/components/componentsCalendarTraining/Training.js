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
import { selectedTrainings } from "../../redux/reducers";
import { useDispatch } from "react-redux";
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
    <>
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
          {titles.map((title, index) => (
            <>
              <Typography key={index}>{title.name}</Typography>
              <Checkbox
                name={titles[index].name}
                onChange={() => handleToggle(title.name)}
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
