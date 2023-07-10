import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Corporate from './components/Corporate/Corporate'
import Vision from './components/Vision/Vision'
import Specialties from './components/Specialties/Specialties'
import Employees from './components/Employees/Employees'
import Career from './components/Career/Career'
import Contact from './components/Contact/Contact'
import Privacy from './components/Privacy/Privacy'
import EmailUs from './components/Email/EmailUs'
import Sitemap from './components/Sitemap/Sitemap'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/corporate',
          element: <Corporate/>
        },
        {
          path: '/vision',
          element: <Vision/>
        },
        {
          path: '/specialties',
          element: <Specialties/>
        },
        {
          path: '/employee',
          element: <Employees/>
        },
        {
          path: '/career',
          element: <Career/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/contact/emailus',
          element: <EmailUs/>
        },
        {
          path: '/privacy',
          element: <Privacy/>
        },
        {
          path: '/sitemap',
          element: <Sitemap/>
        },
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
