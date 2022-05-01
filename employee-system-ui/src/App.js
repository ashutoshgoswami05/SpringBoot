
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './compnents/AddEmployee';
import EmployeeList from './compnents/EmployeeList';
import Navbar from './compnents/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <EmployeeList/>}></Route>
      <Route index element={ <EmployeeList/>}></Route>
      <Route path="/employeeList" element={ <EmployeeList/>}></Route>
      <Route path="/addEmployee" element={ <AddEmployee/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
