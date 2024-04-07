
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import UpdateUserPage from './UpdateUserPage';
import Product_page from './Product_page';
import Cartpage from './CartPage'

function App() {
  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/update" element={<UpdateUserPage/>} />
              <Route path="/product_page" element={<Product_page/>} />
              <Route path="/CartPage" element={<Cartpage/>} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
    
    
    
    </>
  );
}

export default App;
