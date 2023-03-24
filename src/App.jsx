import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './pages/routes'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <RouterProvider router={router} >
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
