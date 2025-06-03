import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListCard from './components/ListCard'
import Jokes from './components/Jokes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jokes />
  </StrictMode>,
)
