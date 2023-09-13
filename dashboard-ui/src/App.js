import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ess-monitor" element={<h1>ESS monitor</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
