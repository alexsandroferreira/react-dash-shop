import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <Helmet titleTemplate="%s | frontend-template" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
