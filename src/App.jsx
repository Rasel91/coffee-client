
import { Outlet } from 'react-router-dom'
import './App.css'
import Nabar from './Nabar'


function App() {


  return (
    <>

      <Nabar></Nabar>
      
      <Outlet></Outlet>

    </>
  )
}

export default App
