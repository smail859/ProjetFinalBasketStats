import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import LoginForm from "./pages/LoginForm";
import DashboardSignUp from "./pages/DashboardSignUp";
import DashboardLogin from "./pages/DashboardLogin";
import TrainingRcm from "./pages/TrainingRcm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/DashboardSignUp" element={<DashboardSignUp />} />
          <Route path="/DashboardLogin" element={<DashboardLogin />} />
          <Route path="/TrainingRcm" element={<TrainingRcm />} />
          {""}
          <Route path="/*" element={<DashboardLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
