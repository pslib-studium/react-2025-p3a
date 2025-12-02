import './App.css'
import StyleProvider from './providers/StyleProvider'
import ColorDisplay from './components/ColorDisplay'
import ColorControl from './components/ColorControl'

function App() {

  return (
    <>
      <StyleProvider>
        <ColorDisplay />
        <ColorDisplay />
        <ColorControl />
      </StyleProvider>
    </>
  )
}

export default App
