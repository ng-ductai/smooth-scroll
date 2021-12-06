import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signin' element={<SignInPage />} exact />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
