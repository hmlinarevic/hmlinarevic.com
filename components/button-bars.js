export default function ButtonBars({ isToggle, onToggle }) {
  const handleButtonClick = () => {
    onToggle()
  }

  return (
    <button onClick={handleButtonClick} className="p-2 sm:hidden">
      <span
        style={isToggle ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white transition-colors"
      ></span>
      <span
        style={isToggle ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white my-1 transition-colors"
      ></span>
      <span
        style={isToggle ? { background: '#d08770' } : null}
        className="block h-[2px] w-8 bg-white transition-colors"
      ></span>
    </button>
  )
}
