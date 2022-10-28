import '../styles/CategoryCard.css'

export const CategoryCard = ({category}) => {
  return (
    <div className="category_card_wrapper">
      <img src={category.url} alt={category.alt} />
      <h3 className="category_title">{category.title}</h3>
      <p>{`${(category.number).toLocaleString('de-DE')} ${category.type}`}</p>
    </div>
  )
}
