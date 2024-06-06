import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import Contate from './pages/Contate'

import './App.css'

import Headers from './components/Headers'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Headers/>
      <main>
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/produtos' element={<Produtos/>} />
            <Route path='/servicos' element={<Servicos/>} />
            <Route path='/contate' element={<Contate/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
