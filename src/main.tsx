import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Post} from './components/Post'
import { Menu } from './components/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Redirect } from './components/Redirect'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/posts/:id' element={<Post/>} />
        <Route path ='/post' element={<Post/>} />
        <Route path ='/redirect' element={<Redirect/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
