import { createContext, useState } from "react";

// 1. Crear el contexto // Usar para consumir el contexto
export const FiltersContext = createContext()

// 2. Crear el proveedor del contexto, y pasarlo
// Provee los datos
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}
