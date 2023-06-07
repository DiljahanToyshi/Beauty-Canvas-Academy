import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <Toaster></Toaster>
    </RouterProvider>
  </AuthProvider>
);
