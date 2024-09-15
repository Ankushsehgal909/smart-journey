import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreateTrip from './create-trip/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/ui/Header.jsx'
import TripDetail from './view/TripDetail.jsx'
import { Provider } from 'react-redux'
import {store}  from './store/store.js'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/create-trip",
    element:<CreateTrip />
  },
  {
    path:"/view-trip",
    element:<TripDetail/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Header/>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
