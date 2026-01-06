import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutPage from './AboutPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const RemotePage = React.lazy(() => import('remote_app/RemotePage'));

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/about", element: <AboutPage/>},
  {path: "/remote", element: (
      <Suspense fallback={<div>Loading remote page...</div>}>
        <RemotePage />
      </Suspense>)},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
