import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import ViewStudent from "./pages/ViewStudent";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/students' element={ViewStudent} />
          <Route path='/add-students' element={AddStudent} />
          <Route path='/edit-student/:id' element={EditStudent} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
