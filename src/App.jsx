import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path: '/home',
          element: <Home/>
        }
      ]
    },
  
  ])

  return (
    <>
    <RouterProvider router={routes}>

    </RouterProvider>
    </>
  )
}

export default App
