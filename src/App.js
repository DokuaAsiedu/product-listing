import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddProductPage from './pages/product-add-page';
import ProductListPage from './pages/product-list-page';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductListPage/>}/>
      <Route path='/add-product-page' element={<AddProductPage/>}/>
    </Routes>
  );
};