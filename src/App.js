import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { Game } from './components/Game'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <Game />
  </div>
)
