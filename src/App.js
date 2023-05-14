import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Switch from "react-switch";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/singleshow/:id"  element={<SinglePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
};

export default App;


