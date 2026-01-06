import { useState } from "react"

export const Button = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <button id='click-btn' className='shared-btn' onClick={() => setState((s) => s + 1)}>Тыкалка с remote-а: {state}</button>
    </div>
  )
}

export default Button