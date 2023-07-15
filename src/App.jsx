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
import Enterprise from './components/Enterprise/Enterprise'
import Performence from './components/Performence/Performence'
import Assurance from './components/Assurance/Assurance'
import Testing from './components/Testing/Testing'
import Solution from './components/Solution/Solution'
import ManageSoft from './components/ManageSoft/ManageSoft'
import Automation from './components/Automation/Automation'
import CurrentOpen from './components/CurrentOpen/CurrentOpen'

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
          path: '/enterprise',
          element: <Enterprise/>
        },
        {
          path: '/performence',
          element: <Performence/>
        },
        {
          path: '/assurance',
          element: <Assurance/>
        },
        {
          path: '/testing',
          element: <Testing/>
        },
        {
          path: '/solution',
          element: <Solution/>
        },
        {
          path: '/manage',
          element: <ManageSoft/>
        },
        {
          path: '/automation',
          element: <Automation/>
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
          path: '/currentopen',
          element: <CurrentOpen/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/emailus',
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
