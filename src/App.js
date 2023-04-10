// COMPONENTS
import SignUpForm from "./pages/signUpForm";
import LoginForm from "./pages/loginForm";
import DashboardSignUp from "./pages/dashboardSignUp";
import DashboardLogin from "./pages/dashboardLogin";
import Messaging from "./pages/messaging";
import Settings from "./pages/settings";
import CalendarTraining from "./pages/calendarTraining";
import NavBarBis from "./components/NavBar/NavBarBis";

// NAVIGATION
import { BrowserRouter, Route, Routes } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarBis title="Basket-Stats">
          <Routes>
            <Route path="/SignUpForm" element={<SignUpForm />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/DashboardSignUp" element={<DashboardSignUp />} />
            <Route path="/DashboardLogin" element={<DashboardLogin />} />
            <Route path="/CalendarTraining" element={<CalendarTraining />} />
            <Route path="/Messaging" element={<Messaging />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/" element={<SignUpForm />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </NavBarBis>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
