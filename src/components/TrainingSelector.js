import titles from "../assets/title.json";
import { Typography, Button, Checkbox } from "@mui/material";
function TrainingSelector({
  handleTrainingSelection,
  handleAddTraining,
  title,
}) {
  return titles.map((title, index) => (
    <div key={index}>
      <Typography>{title.name}</Typography>
      <Checkbox onChange={handleTrainingSelection} value={title} />
      <Button onClick={handleAddTraining}>Ajouter</Button>
    </div>
  ));
}

export default TrainingSelector;
