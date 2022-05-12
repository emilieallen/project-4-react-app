import './App.css';
import 'bulma/css/bulma.min.css';
import "./styles.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/common/NavBar.js"
import LandingPage from './components/common/LandingPage';
import MainPage from './components/common/MainPage';
import LogInForm from './components/authentication/LogInForm';
import RegisterForm from './components/authentication/RegisterForm';


function App() {

  const token = localStorage.getItem("accesstoken");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={! token ? <LandingPage/> : <MainPage/> } />
          <Route path="/Home" element={<MainPage/>} />
          <Route path="/MySpace" element={<MainPage/>} />
          <Route path="/login" element={<LogInForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
          {/* <Route path="/about" element={<About />}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
