
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting='saludo im list container' />
    </>
  )

}

export default App
