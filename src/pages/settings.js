// COMPONENTS
import SettingsForm from "../components/componentsSettings/SettingsForm";
// STYLE
import "../styles/settings.css";

function Settings() {
  const onDeconnexion = (e) => {
    e.preventDefault();
    console.log("deconnexion reussi");
  };
  return (
    <div className="settings">
      <SettingsForm
        pseudo="Pseudo"
        email="Email"
        password="Mot de passe"
        adresse="Adresse"
        onClick={onDeconnexion}
      />
    </div>
  );
}

export default Settings;
