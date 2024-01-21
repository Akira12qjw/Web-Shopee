import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routesElements = useRouteElements()
  return (
    <div>
      {routesElements}
      <ToastContainer />
    </div>
  )
}

export default App
