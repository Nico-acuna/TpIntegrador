import '../styles/BloqueCategorias.css'
import categories from '../categories.json'
import { CategoryCard } from './CategoryCard'

export const BloqueCategorias = () => {
  return (
    <div className="categories_wrapper">
      <div/>
      <div className="categories_block">
        <h2>Buscar por tipo de alojamiento</h2>
        <div className="category_cards">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category}/>
          ))}
        </div>
      </div>
      <div/>
    </div>
  )
}
