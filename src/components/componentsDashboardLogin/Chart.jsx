import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./chart.css";

function Chart({ data, title, chartIndex }) {
  // Définition des couleurs utilisées pour les lignes du graphique
  const chartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Initialisation du tableau qui va contenir les différentes lignes de données du graphique
  let lines = [];

  // Si l'option "Tous les graphiques" est sélectionnée, créer un tableau de toutes les lignes de données
  if (chartIndex === title.length) {
    lines = title.map((stat, index) => (
      <Line
        key={index}
        name={stat.name}
        type="monotone"
        dataKey={`data${index}`}
        stroke={chartColors[index % chartColors.length]}
      />
    ));
  } else if (title && title[chartIndex]) {
    // Si un graphique individuel est sélectionné, ajouter une seule ligne de données au tableau
    lines.push(
      <Line
        key={chartIndex}
        name={title[chartIndex].name}
        type="monotone"
        dataKey={`data${chartIndex}`}
        stroke={chartColors[chartIndex % chartColors.length]}
      />
    );
  }

  // Affichage du graphique avec les données et les lignes définies précédemment
  return (
    <div className="chart">
      <LineChart width={1000} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={50} />
        {lines}
      </LineChart>
    </div>
  );
}

export default Chart;
