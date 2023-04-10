// REACT
import { useState, useEffect } from "react";
// MATERIAL UI
import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
// PROPS
import PropTypes from "prop-types";
// JSON
import CalculData from "../CalculData";
import titles from "../../assets/title.json";
// REDUX
import { useDispatch } from "react-redux";
import { addNewTrainings } from "../../redux/reducers";
// STYLE
import "./trainingRcm.css";

function TrainingRcm({
  title = "",
  data,
  buttonText = "",
  listClassName = "",
  cardClassName = "",
}) {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [trainingCheck, setTrainingCheck] = useState([]);
  const [newTrainingName, setNewTrainingName] = useState("");

  const handleToggle = (event) => {
    const { name } = event.target;
    setTrainingCheck((prevTrainingCheck) => prevTrainingCheck.concat(name));
  };

  const handleAdd = () => {
    if (trainingCheck.length > 0) {
      dispatch(addNewTrainings(trainingCheck));
      setNewTrainingName(trainingCheck.join(", "));
      setTrainingCheck([]);
      setShowAlert(true);
    }
  };

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
        {title && <Typography variant="h5">{title}</Typography>}
        {showAlert && (
          <Alert severity="success">
            <AlertTitle>
              Nouvelle formation ajoutée : {newTrainingName}
            </AlertTitle>
          </Alert>
        )}
        <CalculData
          key={data.length}
          trainingName={titles}
          data={data}
          onChange={handleToggle}
          onClick={handleAdd}
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
