import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Beers from './pages/Beers'
import DetailsBeer from './pages/DetailsBeer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:id' element={<DetailsBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
