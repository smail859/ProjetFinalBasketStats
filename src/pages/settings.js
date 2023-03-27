import SettingsForm from "../components/componentsSettings/SettingsForm";
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
        adresse="10 rue du muet"
        onClick={onDeconnexion}
      />
    </div>
  );
}

export default Settings;
