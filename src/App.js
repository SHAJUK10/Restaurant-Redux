import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RestView from './Pages/RestView';

function App() {
  return (
    <div >
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/resturant-view/:id' element={<RestView/>}/>
</Routes>
   <Footer/>

    </div>
  );
}

export default App;
