import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormCard from './components/FormCard.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FormCard />,
      },
      {
        path: "/home",
        element: (
          <PrivateRoute requiredToken="one-hand1234"> 
            <Home />
          </PrivateRoute>
        ),
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
