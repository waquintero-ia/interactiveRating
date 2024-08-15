import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './component/Card'
import Thanks from './component/Thanks';

function App() {

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path='/' element= {<Card />}/>
            <Route path='/thanks' element= {<Thanks />}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
