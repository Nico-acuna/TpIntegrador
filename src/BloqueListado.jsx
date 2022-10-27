import { RecommendationCard } from './RecommendationCard'
import recommendations from './recommendations.json'
import './BloqueListado.css'

export const BloqueListado = () => {
  return (
    <div className="recommendations_wrapper">
      <div/>
      <div className='recommendations_block'>
        <h2>Recomendaciones</h2>
        <div className="recommendation_cards">
          {recommendations.map(recommendation => (
            <RecommendationCard 
              key={recommendation.id} 
              recommendation={recommendation}
            />
          ))}
        </div>
      </div>
      <div/>
    </div>
  )
}
