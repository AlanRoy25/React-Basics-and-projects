import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import Themebtn from './components/Themebtn'
import Card from './components/Card'


function App() {
  const [themeMode, SetThemeMode] = useState('light')

  const lightTheme = () => {
    SetThemeMode("light")
  }
  const darkTheme = () => {
    SetThemeMode("dark")
  }

  //Actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
   
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <Themebtn />
        </div>
        <div className='w-full max-w-sm mx-auto' >
          <Card />
        </div>
      </div>
      </div>

    </ThemeProvider>

  )
}

export default App
 

//remember to change in tailwind config js


const json = '{ "fruit": "pineapple", "fingers": 10 }';
console.log(typeof json);
const obj = JSON.parse(json);
console.log(typeof obj);
console.log(obj.fruit, obj.fingers);