import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="deliver-shop-theme" defaultTheme="dark">
        <Toaster richColors closeButton />
        <Helmet titleTemplate="%s | frontend-template" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
