import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Energia from "./pages/Energia";
import Sucden from "./pages/Sucden";
import InvestNI from "./pages/InvestNI";
import BudgetEnergy from "./pages/BudgetEnergy";
import SageTrader from "./pages/SageTrader";
import SmartMetering from "./pages/SmartMetering";
import NIE from "./pages/NIE";
import CIE from "./pages/CIE";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/Energia" exact element={<Energia/>} />
          <Route path="/Sucden" exact element={<Sucden/>} />
          <Route path="/InvestNI" exact element={<InvestNI/>} />
          <Route path="/BudgetEnergy" exact element={<BudgetEnergy/>} />
          <Route path="/SageTrader" exact element={<SageTrader/>} />
          <Route path="/SmartMetering" exact element={<SmartMetering/>} />
          <Route path="/NIE" exact element={<NIE/>} />
          <Route path="/CIE" exact element={<CIE/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
