import { useState } from 'react'

export default function ButtonBars({ onToggle }) {
  const [addStyles, setAddStyles] = useState(false)

  const handleButtonClick = () => {
    setAddStyles((prevState) => !prevState)
    onToggle()
  }

  return (
    <button onClick={handleButtonClick} className="p-2 sm:hidden">
      <span
        style={addStyles ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white transition-colors"
      ></span>
      <span
        style={addStyles ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white my-1 transition-colors"
      ></span>
      <span
        style={addStyles ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white transition-colors"
      ></span>
    </button>
  )
}
