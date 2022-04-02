import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Display from "./component/Display";
import NavBar from "./component/NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Display/>

        
        

        <Routes>

          <Route path="/" />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
