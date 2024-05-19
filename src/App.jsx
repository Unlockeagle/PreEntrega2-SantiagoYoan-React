import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navigation/NavBar'
import HomeComponent from './components/HomeView/HomeComponent'
import CategoryMenComponent from './components/CategoryMen/CategoryMenComponent'
import CategoryShoseComponent from './components/CategoryShose/CategoryShoseComponent'
import CategoryWomenComponent from './components/CategoryWomen/CatgoryWomenComponent'
import ProdDetail from './components/ProductView/ProdDetail'

function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomeComponent/>}> </Route>
        <Route exact path='/men' element={<CategoryMenComponent/>}> </Route>
        <Route exact path='/women' element={<CategoryWomenComponent/>}> </Route>
        <Route exact path='/shoes' element={<CategoryShoseComponent/>}> </Route>
        <Route exact path='/product/:prodId' element={<ProdDetail/>}> </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
