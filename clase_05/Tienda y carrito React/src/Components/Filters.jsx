import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()


  const minPrinceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ... prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    setFilters(prevState => ({
      ... prevState,
      category: event.target.value
    }))  
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPrinceFilterId}>Precio mínimo:</label>
        <input 
          type="range" 
          id={minPrinceFilterId} 
          min='0' 
          max='1500'
          onChange={handleChangeMinPrice}
          value={filters.minPrice} 
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
      
    </section>
  )
}