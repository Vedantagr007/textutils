import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textform'
import Alert from './components/Alert'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import About from './components/About'

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }

  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TexT-Utils" mode={mode} toggleMode={toggleMode} aboutText = "About"/>
        <Main>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path='/About' element={<About mode={mode}/>} />
            <Route exact path='/' element={<Textarea heading="Edit your text here" mode={mode} />} />
          </Routes>
        </Main>
    </>
  )
}

export default App