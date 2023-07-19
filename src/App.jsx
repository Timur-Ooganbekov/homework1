
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import SinglePage from './pages/SinglePage.jsx'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
        <Navbar/>
      <Routes>
        {/* <Route  element={<Layout />}> */}
          <Route path='/' element={<MainPage />} />
          <Route path="/todo"element={<SinglePage />} />
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
