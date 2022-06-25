import "./App.css";
import Navbar from "./pages/Navbar";
import ViewStudent from "./pages/ViewStudent";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/students' element={<ViewStudent />} />
            <Route path='/add-student' element={<AddStudent />} />
            <Route path='/edit-student/:id' element={<EditStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
