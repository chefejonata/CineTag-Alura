import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import NaoEncontrada from 'pages/NaoEncontrada'
import Paginabase from 'pages/PaginaBase'
import Player from 'pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginabase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />} ></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
