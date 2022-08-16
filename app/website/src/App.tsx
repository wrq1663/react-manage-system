import { useRoutes } from 'react-router-dom';
import routes from './routes/index'
// import { Suspense } from 'react';
// import PageLoading from './components/PageLoading';

const App = () => {
  const Currelement = useRoutes(routes)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* <Suspense fallback={<PageLoading />}> */}
        {Currelement}
      {/* </Suspense> */}
    </div>
  )
}

export default App