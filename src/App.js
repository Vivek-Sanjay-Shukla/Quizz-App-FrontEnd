import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import { CheckUserExist } from './helper/helper';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element = {<Home/>} exact/>
          {/* this is to protect our app from uauthorized access */}
          <Route path='/quiz' element = {<CheckUserExist><Quiz/></CheckUserExist> } />
          <Route path='/result' element = {<CheckUserExist><Result/></CheckUserExist>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
