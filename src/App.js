import { useEffect, useState } from "react";
import SignUpForm from "./pages/signUpForm";
import LoginForm from "./pages/loginForm";
import DashboardSignUp from "./pages/dashboardSignUp";
import DashboardLogin from "./pages/dashboardLogin";
import Messaging from "./pages/messaging";
import Settings from "./pages/settings";
import CalendarTraining from "./pages/calendarTraining";
import NavBarBis from "./components/NavBar/NavBarBis";
import ErrorComponent from "./components/ErrorComponent";
import { UidContext } from "./components/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

function App() {
  const [uid, setUid] = useState(null);
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get(`${apiURL}jwtid`, {
          withCredentials: true,
        });
        setUid(res.data);
      } catch (err) {
        console.log(err);
        // Afficher un message d'erreur à l'utilisateur
      }
    };

    if (!uid) {
      fetchToken();
    }
  }, [uid]);

  const authenticatedRoutes = (
    <NavBarBis title="Basket-Stats">
      <Routes>
        <Route path="/DashboardSignUp" element={<DashboardSignUp />} />
        <Route path="/" element={<DashboardSignUp />} />
        <Route path="/DashboardLogin" element={<DashboardLogin />} />
        <Route path="/calendarTraining" element={<CalendarTraining />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </NavBarBis>
  );

  const unauthenticatedRoutes = (
    <Routes>
      <Route path="/" exact element={<SignUpForm />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="*" element={<ErrorComponent />} />
    </Routes>
  );

  return (
    <UidContext.Provider value={uid}>
      <Provider store={store}>
        <BrowserRouter>
          {uid ? authenticatedRoutes : unauthenticatedRoutes}
        </BrowserRouter>
      </Provider>
    </UidContext.Provider>
  );
}

export default App;
