import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Films from './Components/Films';
import Starships from './Components/Starships';
import Vehicles from './Components/Vehicles';
import { useDispatch } from 'react-redux';
import { getAllFilms, getAllStarships, getAllVehicles } from './Redux/Actions';
import '../src/css/styles.css'
import Pagination from './Components/Pagination';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFilms())
    dispatch(getAllStarships())
    dispatch(getAllVehicles())
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<><Navbar/><Pagination/></>}/>
      </Routes>  
      <Routes>
        <Route exact path='/films' element={<Films/>}/>
        <Route exact path='/starships' element={<Starships/>}/>
        <Route exact path='/vehicles' element={<Vehicles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
