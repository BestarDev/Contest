import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import TestScreen from './screens/TestScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/test' element={<TestScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
