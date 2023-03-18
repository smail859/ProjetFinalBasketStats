import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import data from "../../assets/data.json";
import CalculData from "../CalculData";

function TrainingRcm() {
  // initialisation d'un tableau vide pour stocker les entrainements sélectionnés
  const [selectedTraining, setSelectedTraining] = useState([]);

  /// initialisation d'un tableau vide pour stocker les nouveaux entrainements ajoutés
  const [newTrainings, setNewTrainings] = useState([]);

  // fonction appelée lorsqu'un entrainement est sélectionné
  const handleTrainingSelection = (event) => {
    event.preventDefault();
    // enregistrer la valeur de l'élément sélectionné
    const selectedTrainingName = event.target.value; // récupère la valeur de l'élément sélectionné
    setSelectedTraining([...selectedTraining, selectedTrainingName]); // ajoute la valeur à la liste des entrainements sélectionnés
  };
  // fonction appelée lorsqu'un bouton "Ajouter" est cliqué
  const handleAddTraining = (event) => {
    event.preventDefault();
    // ajoute les entrainements sélectionnés à la liste des nouveaux entrainements
    setNewTrainings([...newTrainings, ...selectedTraining]);
    // afficher un message dans la console
    console.log("Entraînement ajouté : ", selectedTraining);
    // vide la liste des entrainements sélectionnés
    setSelectedTraining([]);
  };

  return (
    <>
      <Card sx={{ width: 500, margin: 5 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Entrainement Conseillé </Typography>
          <CalculData
            data={data}
            handleTrainingSelection={handleTrainingSelection}
            handleAddTraining={handleAddTraining}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default TrainingRcm;
