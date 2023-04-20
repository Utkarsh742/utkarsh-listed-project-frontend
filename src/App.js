import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
function App() {
  return (
    <Router>
   <Routes>
   <Route path="/" element={<Signin />} />
   <Route path='/home' element={<Home />} />
   <Route path='/signup' element={<Signup />} />
   </Routes>
   </Router>
  );
}

export default App;
