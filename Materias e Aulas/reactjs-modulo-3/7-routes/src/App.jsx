import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { useState } from 'react'

import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Post from './pages/Post.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='post/:id' element={<Post />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

