import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import TravelCard from './TravelCard.jsx'
import travelData from './data.js'
import Footer from './Footer.jsx'

const travelCards = travelData.map((item) => (
  <TravelCard key={item.id} {...item} /> 
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header />
      <main>{travelCards}</main>
      <Footer />
    </>
  </StrictMode>,
)
