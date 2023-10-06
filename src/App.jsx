import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Error from './pages/error/error';
import Help from './pages/help/help';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Reports from './pages/reports/reports';
import Settings from './pages/settings/settings';
import Team from './pages/team/team';
import './utils/style/App.css';
import { Routes, Route } from 'react-router-dom'
import UpdateProduct from './pages/updateProduct/updateProduct';
import { IsOpenContext, PathProvider, ProductProvider } from './utils/context/context';
import AddProduct from './pages/addProduct/addProduct';
import Orders from './pages/orders/orders';
import ItemProduct from './pages/itemProduct/itemProduct';
import { useContext } from 'react';

function App() {
  // Pour minimiser le menu
  const [isOpen, setOpen] = useContext(IsOpenContext)

  return (
    <PathProvider>
    <ProductProvider>
      <div className={ isOpen===true ? 'App' : 'App_close'}>
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
              <Route path='/addProduct' element={<AddProduct/>}/>
              <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
              <Route path='/itemProduct/:id' element={<ItemProduct/>}/> 
              <Route path='/order' element={<Orders/>}/>
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
    </PathProvider>
  );
}

export default App;
