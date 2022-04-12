import '../src/Styles/App.css';
import NavBar from './Components/nav';
import { Route, Routes } from "react-router-dom";
import BootstrapForm from './Components/bootstrapForm';
import HomePage from './Components/homePage';
import SemanticLandmarks from './Components/semanticLandmarks';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/bootstrap-form" element={<BootstrapForm />} />
        <Route exact path="/semantic-landmarks" element={<SemanticLandmarks />} />
      </Routes>
    </div>
  );
}

export default App;
