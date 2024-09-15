// core components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// docs components
import ButtonDocs from "./components/Buttons";
import CardDocs from "./components/Cards";
import AlertDocs from "./components/Alerts";
import FormDocs from "./components/Forms";
import TableDocs from "./components/Tables";

//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <section className="grid grid-cols-6 px-10 mt-20">
        <Sidebar />
        <div></div>
        <main className="col-span-5">
          <div className="container px-10 py-5">
            <Routes>
              <Route path="/alert" element={<AlertDocs />} />
              <Route path="/button" element={<ButtonDocs />} />
              <Route path="/card" element={<CardDocs />} />
              <Route path="/form" element={<FormDocs />} />
              <Route path="/table" element={<TableDocs />} />
            </Routes>
          </div>
        </main>
      </section>
    </Router>
  );
}

export default App;
