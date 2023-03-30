import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAddPage from './pages/product-add-page';
import ProductListPage from './pages/product-list-page';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductListPage/>}/>
      <Route path='/product-add-page' element={<ProductAddPage/>}/>
    </Routes>
  );
};