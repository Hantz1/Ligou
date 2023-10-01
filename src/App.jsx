import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Error from './pages/error/error';
import Help from './pages/help/help';
import Home from './pages/home/home';
import Order from './pages/order/order';
import Products from './pages/products/products';
import Reports from './pages/reports/reports';
import Settings from './pages/settings/settings';
import Team from './pages/team/team';
import './utils/style/App.css';
import { Routes, Route } from 'react-router-dom'
import NewProduct from './pages/newProduct/newProduct';
import UpdateProduct from './pages/updateProduct/updateProduct';
import {  ProductProvider } from './utils/context/context';

function App() {
  
  return (
    <ProductProvider>
      <div className="App">
        <div className='header'>
          <Header/>
        </div>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='main'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/newProduct' element={<NewProduct/>}/>
              <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/reports' element={<Reports/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/Settings' element={<Settings/>}/>
              <Route path='/help' element={<Help/>}/>
              <Route path='*' element={<Error/>}/>
              <Route/>
            </Routes>
        </div>
      </div>
    </ProductProvider>
    
  );
}

export default App;
