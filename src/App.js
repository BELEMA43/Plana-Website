
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login/WebHome' element={<WebHome/>}/>
        <Route path='/Signup/WebHome' element={<WebHome/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='/Signup/WebHome/DayView' element={<DayView/>}/>
        <Route path='/Login/WebHome/DayView' element={<DayView/>}/>
        <Route path='/Login/WebHome/MonthlyGoals' element={<MonthlyGoals/>}/>
        <Route path='/Signup/WebHome/MonthlyGoals' element={<MonthlyGoals/>}/>
        <Route path='/Login/WebHome/NftMarket' element={<NftMarket/>}/>
        <Route path='/Signup/WebHome/NftMarket' element={<NftMarket/>}/>
        <Route path='/Login/WebHome/Weekly' element={<Weekly/>}/>
        <Route path='/Signup/WebHome/Weekly' element={<Weekly/>}/>
      </Routes>
    </div>
  );
}

export default App;
