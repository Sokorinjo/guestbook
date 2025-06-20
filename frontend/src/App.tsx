import { Outlet } from 'react-router'
import Welcome from './pages/WelcomePage'

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App