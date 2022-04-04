import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import { Routes, Route } from 'react-router-dom';
import Reviews from './Components/Reviews/Reviews';
import ReviewsTab from './Components/Reviews/ReviewsTab';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Features></Features>} ></Route>
        <Route path='/reviews' element={<ReviewsTab></ReviewsTab>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
      </Routes>
      

    </div>
  );
}

export default App;
