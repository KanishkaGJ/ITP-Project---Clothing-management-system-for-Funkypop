import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/css/formStyles.css';

//material components 
import InvenHeader from './components/InvenHeader';
import AddMaterial from './components/addMaterialForm';
import MaterialTable from './components/materialTable';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          
          <Route path="/materials" element={<><InvenHeader /><MaterialTable /></>} />
          <Route path="/addmat" element={<><InvenHeader /><AddMaterial /></>} />
        </Routes>
      </div>

    </Router >
  );
}

export default App;
