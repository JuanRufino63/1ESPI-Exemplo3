import Nav from "./components/Nav"
import Footer from "./components/Footer"
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Nav/>
       {/*CHAMA TODOS OS COMPONENTES FILHO */}
       <Outlet/>
      <Footer/>
    </>
  )
}

export default App
