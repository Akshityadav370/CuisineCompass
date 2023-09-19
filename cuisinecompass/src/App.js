
import './App.css';
import Home from './screens/Home';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/boo';
// // import '../node_modules/bootstrap/dist/js/bootstrap-bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
  );
}

export default App;