import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import _404 from './pages/_404'
import { GlobalStyle } from './atoms/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<_404 />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
