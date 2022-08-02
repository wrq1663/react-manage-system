import { useRoutes } from 'react-router-dom';
import routes from './routes/index'

const App = () => {
  const Currelement = useRoutes(routes)
  return (
    <div>
      {Currelement}
    </div>
  )
}

export default App