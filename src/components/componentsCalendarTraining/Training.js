import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import TrainingSelector from "../TrainingSelector";

function Training() {
  // Apelle API pour récupérer dans la BDD les entrainements conseillé sélectionné
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const responce = await fetch("https://apelle.api.com/traininRcm");
  //       const json = await responce.json();
  //       setTrainings(json);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
          <Typography> Entrainements </Typography>
          <TrainingSelector
            handleTrainingSelection={handleTrainingSelection}
            handleAddTraining={handleAddTraining}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default Training;
