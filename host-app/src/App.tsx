import { Link } from "react-router-dom"
import React, { useState, Suspense} from 'react'

import './App.css'
const RemoteButton = React.lazy(() => import('remote_app/Button'));
import RComp from 'remote_app/RemoteComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <RemoteButton />
      </Suspense>
      {/* <Button/> */}
      <h1>hiii host app!</h1>
      <RComp name="Alina" status="active" count={count}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Повысить счетчик
        </button>
      </div>
      <Link to={"/remote"}>Перейти к remote странице</Link>
    </>
  )
}

export default App
