import { useRoutes } from 'react-router-dom';
import routes from './routes/index'

const App = () => {
  const Currelement = useRoutes(routes)
  return (
    <div style={{width:'100%',height:'100%'}}>
      {Currelement}
    </div>
  )
}

export default App