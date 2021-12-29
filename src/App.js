import './App.css';
import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { ProductsProvider} from './context/CartContext/CartContext'



function App() {

  return (
    <div className='App'>
      <ProductsProvider>
        <AppRouter/>
      </ProductsProvider>
    </div>
  );
}

export default App;



