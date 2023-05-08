import "./App.css";
import RateForm from "./components/RateForm";
import { Routes, Route } from "react-router-dom";
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RateForm />} />
        <Route path="/admin" element={<ViewForm />} />
      </Routes>
    </div>
  );
}

export default App;
