import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page/home-pages';
import LoginPage from './pages/login-page/login-pages';


const App = ()=> {
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;