import Cabecalho from 'componentes/Cabecalho'
import Container from 'componentes/Container'
import Rodape from 'componentes/Rodape'
import FavoritosProvider from 'contextos/favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Paginabase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}
