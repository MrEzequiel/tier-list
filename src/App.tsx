import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Header from './components/Header'
import TierList from './components/TierList'
import TierListProvider from './context/TierListContext'
import { GlobalStyles } from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <TierListProvider>
        <TierList />
      </TierListProvider>
      <GlobalStyles />
    </DndProvider>
  )
}

export default App
