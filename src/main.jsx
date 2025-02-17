import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Approutes from './Routes/Approutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approutes/>
  </StrictMode>,
)
