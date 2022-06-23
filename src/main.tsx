import React from 'react' //Compartilhado para todos os Ambientes
import ReactDOM from 'react-dom/client' //React pra WEB
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
