
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import WebHome from './Components/WebHome';
import Login from './Pages/Forms/Login';
import Signup from './Pages/Forms/Signup';
import DayView from './Pages/Day/DayView';
import MonthlyGoals from './Pages/Month/MonthlyGoals';
import NftMarket from './Pages/Nft/NftMarket';
import Weekly from './Pages/Week/Weekly';
import Toggle from './Pages/Toggle';
import FormD from './FormD';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Toggle' element={<Toggle/>}/>
        <Route path='/WebHome' element={<WebHome/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/DayView' element={<DayView/>}/>
        <Route path='/MonthlyGoals' element={<MonthlyGoals/>}/>
        <Route path='/NftMarket' element={<NftMarket/>}/>
        <Route path='/Weekly' element={<Weekly/>}/>
        <Route path='FormD' element={<FormD/>}/>
        <Route path='*' element={<section> 404 Not Found</section>}/>
      </Routes>
    </div>
  );
}

export default App;
