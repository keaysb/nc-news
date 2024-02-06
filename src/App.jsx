import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import AllArticles from './components/articles/AllArticles'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AllArticles />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
