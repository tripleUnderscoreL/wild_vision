import { Outlet } from 'react-router-dom'
import './App.scss'

function App() {

  return (
    <>
      <div className='App'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
