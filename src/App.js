import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';

import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        < Route path = "/" element = {<Welcome />} />
        < Route path = "/all" element = {<AllUsers />} />
        < Route path = "/add" element = {<AddUsers />} />
        < Route path = "/edit/:id" element = {<EditUser/>} />
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
