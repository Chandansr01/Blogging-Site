import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/account/Login'
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      <div style={{marginTop: 64}}>
        <Routes>
          <Route path='/login' element={<Login  isUserAuthenticated={isUserAuthenticated}/>}/>
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </DataProvider>
    );
}

export default App;
