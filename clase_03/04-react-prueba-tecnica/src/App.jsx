import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'
import './App.css'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Obtener nuevo hecho sobre gatos</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={ imageUrl } alt={`imagen extraída usando la primera palabra de ${fact}`} />}
      <Otro className="otro" fact={ fact } />
      <Otro className="otro" fact="hola" />
      <Otro className="otro" fact={ fact } />
    </main>
  )
  }

export default App
