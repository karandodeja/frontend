import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowEmployee from './components/ShowEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ShowEmployee />} />
          <Route index element={<ShowEmployee />} />
          <Route path='/employeeList' element={<ShowEmployee />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
