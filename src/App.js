import './App.css';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import { Routes, Route } from 'react-router-dom';
import ReviewsTab from './Components/Reviews/ReviewsTab';
import Dashboard from './Components/Dashboard/Dashboard';
import { useEffect } from 'react';
import Blogs from './Components/Blogs/Blogs'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';

function App() {
 
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Features></Features>} ></Route>
        <Route path='/reviews' element={<ReviewsTab></ReviewsTab>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
