import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const GustavoPerfil = "https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/Gustavo_perfil_cdioie.webp"

function setFavicon(href: string) {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  const link = existing ?? document.createElement('link')
  link.rel = 'icon'
  link.href = href
  if (!existing) document.head.appendChild(link)
}

setFavicon(GustavoPerfil)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


