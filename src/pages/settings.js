// COMPONENTS
import axios from "axios";
import SettingsForm from "../components/componentsSettings/SettingsForm";
import cookie from "js-cookie";
// STYLE
import "../styles/settings.css";

function Settings() {
  const apiURL = process.env.REACT_APP_API_URL;

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const onDeconnexion = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "GET",
        url: `${apiURL}user/logout`,
        withCredentials: true,
      });
      removeCookie("jwt");
    } catch (error) {
      console.log(error);
    }
    window.location.replace("/loginForm");
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
