import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './component/Card'
import Thanks from './component/Thanks';
import { useState } from 'react';

function App() {

  const [selectedValue, setSelectedValue] = useState('0');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path='/' element= {<Card handleChange={handleChange}/>}/>
            <Route path='/thanks' element= {<Thanks score={selectedValue}/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
