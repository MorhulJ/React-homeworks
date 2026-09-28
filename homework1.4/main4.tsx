import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index4.css'
import MagicBall from './App4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MagicBall />
  </StrictMode>,
)
