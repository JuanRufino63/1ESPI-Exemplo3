import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*INSTALANDO O PACOTE DE DEPENDENCIAS PARA CRIAR AS ROTAS */
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'
/*Criando a função createBrowserRouter*/

const router = createBrowserRouter([
  {
    /* Criando os elementos pai */
    path: '/', element: <App/>,
    errorElement:<Error/>,

    //CRIANDO OS ELEMENTOS FILHOS
    children:[
      {path: '/',element:<Home/>},
      {path: '/aluno', element:<Aluno/>},
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Criando a desestruturação pra que seja renderizada */}
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
