import CenteredPalette from "./components/CenteredPalette"
import HorizontalPalette from "./components/HorizontalPalette"
import PaletteControl from "./components/PaletteControl"
import { StyleProvider } from "./providers/StyleProvider"

function App() {
  return (
    <StyleProvider>
        <h1>Barevná paleta</h1>
        <HorizontalPalette />
        <PaletteControl />
        <CenteredPalette />
    </StyleProvider>
  )
}

export default App