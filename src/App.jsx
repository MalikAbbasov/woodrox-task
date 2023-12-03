import "./App.css";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Error from "./components/Error";
import Projectdetails from "./pages/Projectdetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/project-details" element={<Projectdetails/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<Error></Error>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
