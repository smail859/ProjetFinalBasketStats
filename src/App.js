import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./pages/signUpForm";
import LoginForm from "./pages/loginForm";
import DashboardSignUp from "./pages/dashboardSignUp";
import DashboardLogin from "./pages/dashboardLogin";
import Messaging from "./pages/messaging";
// import Settings from "./pages/Settings";

import CalendarTraining from "./pages/calendarTraining";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/DashboardSignUp" element={<DashboardSignUp />} />
          <Route path="/DashboardLogin" element={<DashboardLogin />} />
          <Route path="/CalendarTraining" element={<CalendarTraining />} />
          <Route path="/Messaging" element={<Messaging />} />
          <Route path="/*" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
