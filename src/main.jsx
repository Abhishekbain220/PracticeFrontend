import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './utils/ProductContext.jsx'
import { UserProvider } from './utils/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <ProductProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ProductProvider>
    </UserProvider>
)
