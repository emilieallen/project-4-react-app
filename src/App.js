import './App.css';
import 'bulma/css/bulma.min.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/common/NavBar.js"
import LandingPage from './components/common/LandingPage';
import MainPage from './components/common/MainPage';
import LogInForm from './components/authentication/LogInForm';
import RegisterForm from './components/authentication/RegisterForm';
import MyPicsPage from './components/common/MyPics';
import EditPage from './components/common/EditPage';
import UploadPage from './components/common/UploadPage';

function App() {

  const token = localStorage.getItem("accesstoken");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={! token ? <LandingPage/> : <MainPage/> } />
          <Route path="/MyPics" element={<MyPicsPage/>} />
          <Route path="/MyPics/Edit" element={<EditPage/>} />
          <Route path="/MyPics/Upload" element={<UploadPage/>} />
          <Route path="/login" element={<LogInForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
