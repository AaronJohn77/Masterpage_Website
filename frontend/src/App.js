
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import UpdateUserPage from './UpdateUserPage';

function App() {
  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/update" element={<UpdateUserPage/>} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
    
    
    
    </>
  );
}

export default App;
