// REACT
import { useContext, useState } from "react";
// MATERIAL UI
import { Card } from "@mui/material";
// COMPONENTS
import Chart from "../components/componentsDashboardLogin/Chart";
import Widgets from "../components/componentsDashboardLogin/Widgets";
import StatFormControl from "../components/componentsDashboardLogin/StatFormControl";

import { UidContext } from "../components/AppContext";
// JSON
import data from "../assets/data.json";
import title from "../assets/title.json";
// STYLE
import "../styles/dashboardLogin.css";
import LoginForm from "./loginForm";

function DashboardLogin() {
  const [dataPoints, setDataPoints] = useState(data); // initialisation de l'état dataPoints à partir de la variable data, et définition de la fonction setDataPoints qui permet de mettre à jour cet état
  const [selectedChartIndex, setSelectedChartIndex] = useState(0); // initialisation de l'état selectedChartIndex à 0 (premier graphique affiché), et définition de la fonction setSelectedChartIndex qui permet de mettre à jour cet état
  const uid = useContext(UidContext);

  const handleStatChange = (newData) => {
    // fonction qui permet de mettre à jour l'état dataPoints en fonction des données renvoyées par les contrôles de statistiques
    setDataPoints(newData);
  };

  const handleChartIndexChange = (index) => {
    // fonction qui permet de mettre à jour l'état selectedChartIndex en fonction de l'index du graphique sélectionné
    setSelectedChartIndex(index);
  };

  const showAllCharts = () => {
    // fonction qui permet d'afficher tous les graphiques
    setSelectedChartIndex("all");
  };

  return (
    <>
      {uid ? (
        <div>
          {/* Affichage des widgets avec les données dataPoints */}
          <Widgets dataPoints={dataPoints} />
          <Card className="chart-container">
            {selectedChartIndex !== null &&
              selectedChartIndex !== "all" && ( // Condition d'affichage d'un graphique spécifique (si selectedChartIndex est différent de null et de "all")
                <Chart
                  className="chart"
                  data={data}
                  title={title}
                  chartIndex={selectedChartIndex}
                />
              )}
            {selectedChartIndex === "all" && ( // Condition d'affichage de tous les graphiques (si selectedChartIndex est égal à "all")
              <Chart
                className="chart"
                data={data}
                title={title}
                chartIndex="all"
              />
            )}
            <StatFormControl // Composant qui permet de sélectionner les statistiques à afficher et le graphique à afficher
              onStatChange={handleStatChange}
              onChartIndexChange={handleChartIndexChange}
              data={data}
              showAllCharts={showAllCharts}
              className="stat-container"
            />
          </Card>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default DashboardLogin;
