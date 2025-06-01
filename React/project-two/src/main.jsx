import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Card } from './components/Live'
import { TestFont } from './components/Testfont'

import Alert from "./components/Alert.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Card />
    <TestFont/> */}
    <Alert/>
  </StrictMode>,
)
