import logo from './logo.svg';
import './App.css';
import Header from './component/shared/Header/Header';
import Footer from './component/shared/footer/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Details from './component/Home/Details/Details';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Resister from './component/Resister/Resister';

import auth from './Firebase.init';
import Cardetails from './component/Cardetails/Cardetails';
import RequireAuth from './component/RequireAuth/RequireAuth';



function App() {

  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<RequireAuth>
          <Details></Details>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/Cardetails' element={<RequireAuth>
          <Cardetails></Cardetails>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
