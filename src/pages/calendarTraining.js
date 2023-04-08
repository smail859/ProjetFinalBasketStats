import TrainingRcm from "../components/componentsCalendarTraining/TrainingRcm";
import Training from "../components/componentsCalendarTraining/Training";
import CalendarInfos from "../components/componentsCalendarTraining/CalendarInfos";
import "../styles/calendarTraining.css";
import data from "../assets/data.json";

function CalendarTraining() {
  return (
    <div className="box">
      <TrainingRcm
        title="Entrainement Conseillé"
        data={data}
        buttonText="Ajouter"
        listClassName="training_list"
        cardClassName="card_training_rcm"
      />
      <Training
        title="Entrainements par defaut"
        buttonText="Ajouter"
        checkboxClassName="checkbox_training"
        buttonClassName="button_training"
      />
      <CalendarInfos
        title="Récapitulatif des entraînements"
        recommendedTraining="Tir 2 Points"
        selectedTraining="Tir 3 Points"
      />
    </div>
  );
}

export default CalendarTraining;
