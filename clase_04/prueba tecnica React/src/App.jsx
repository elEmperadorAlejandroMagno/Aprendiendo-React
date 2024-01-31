import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'



function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

    //! validaciones con useEffect
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search == ''
        return
      }
      if (search == '') {
        setError('No se puede buscar una película vacía')
        return
      }
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar una película con número')
        return
      }
      if (search.length < 0) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }, [search])
    return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })


  const searchDebounce = useCallback(
    debounce(search => {
      getMovies({ search })
  }, 300)
  , [getMovies]
  )

 //obtener datos de forma no controlada
  const handleSubmit = event => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  // obtener datos de forma controlada
  const handleChange = event => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    searchDebounce(newSearch)
  }

  return (
    <>
    <header>
      <h1>Prueba Técnica</h1>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange}  value={search} name="query" type="search" placeholder='Avengers, Starwars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </header>

    <main>
      {
        loading ? <p>Cargando ...</p> : <Movies movies={movies}/>
      }
    </main>
    </>
  )
}

export default App
