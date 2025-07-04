import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Welcome from './pages/WelcomePage.tsx'
import NewMessagePage from './pages/NewMessagePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index={true} element={<Welcome />} />
          <Route path='add-message' element={<NewMessagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
