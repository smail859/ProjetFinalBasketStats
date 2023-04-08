import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Définition de l'état initial
const initialState = {
  selectedTrainings: [],
  newTrainings: [],
};

// Création de la tranche (slice) avec un nom, un état initial et des actions
export const trainingSlice = createSlice({
  name: "manageTraining", // Nom de la tranche
  initialState, // État initial
  reducers: {
    // Action pour définir les entrainements sélectionnés par l'utilisateur
    selectedTrainings: (state, action) => {
      const tempTrainings = action.payload.map((name) => {
        return {
          id: nanoid(),
          name: name,
        };
      });
      state.selectedTrainings.push(...tempTrainings);
    },
    // Action pour ajouter les nouveaux entrainements dans le store
    addNewTrainings: (state, action) => {
      const trainingRcm = action.payload.map((name) => {
        return {
          id: nanoid(),
          name: name,
        };
      });
      state.newTrainings.push(...trainingRcm);
    },
    // Action pour supprimer des entrainements, en fonction du type spécifié (selected ou new)
    deleteTraining: (state, action) => {
      const { type, id } = action.payload; // On récupère le type et l'id de l'entraînement à supprimer
      if (type === "selected") {
        // Si le type est "selected", on supprime l'entraînement dans le tableau selectedTrainings
        state.selectedTrainings = state.selectedTrainings.filter(
          (training) => training.id !== id && training !== undefined
        );
      } else if (type === "new") {
        // Si le type est "new", on supprime l'entraînement dans le tableau newTrainings

        state.newTrainings = state.newTrainings.filter(
          (training) => training.id !== id && training !== undefined
        );
        console.log(id);
      }
    },
  },
});

// Exportation des actions pour les utiliser dans d'autres parties de l'application
export const { selectedTrainings, addNewTrainings, deleteTraining } =
  trainingSlice.actions;

// Exportation du réducteur créé par la tranche (slice) pour être utilisé par le store Redux
export default trainingSlice.reducer;
