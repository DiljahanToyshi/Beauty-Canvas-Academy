import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/routes/Routes.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


// eslint-disable-next-line no-unused-vars
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      <Toaster></Toaster>
    </RouterProvider>
    </QueryClientProvider>
  </AuthProvider>
);
