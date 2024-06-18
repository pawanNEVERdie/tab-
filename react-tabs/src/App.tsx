import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabItem from './components/tabs/TabItem'
import Tablist from './components/tabs/Tablist'
function App() {

  return (
    <>
          <div className="App">
      <TabList activeTabIndex={1}>
        <TabItem label="Tab #1">
          <p>This is Tab #1</p>
        </TabItem>
        <TabItem label="Tab #2">
          <p>Selected by default, this is tab #2.</p>
        </TabItem>
        <TabItem label="Tab #3">
          <p>Tab #3, the last tab.</p>
        </TabItem>
      </TabList>
    </div>
    </>
  )
}

export default App
