import './RecommendationCard.css'

export const RecommendationCard = ({recommendation}) => {
  const getAmenityDimensions = (amenity) => {
    if (amenity === 'wifi') return "18";
    if (amenity === 'pool') return "28";
  }
  return (
    <div className="recommendation_card_wrapper">
      <img src={recommendation.url} alt={recommendation.alt} />
      <div className="recommendation_card_content">
        <div className="recommendation_card_type_wrapper">
          <p className="recommendation_card_type">
            {recommendation.type.toUpperCase()}
          </p>
          {[...Array(recommendation.stars).keys()].map((star, index) => (
            <img 
              key={index}
              src="icons/star.svg" 
              alt="estrella" 
              width="14" 
              height="14"
            />
          ))}
        </div>
        <h3 className="recommendation_title">{recommendation.title}</h3>
        <div className="distance_info_wrapper">
          <img src="icons/location-mini.svg" alt="location" width="12" height="17"/>
          <p className="recommendation_description">
            {`A ${recommendation.center_distance} m del centro`}
          </p>
        </div>
        <div className="amenities_wrapper">
          {recommendation.amenities.map((amenity,index) => (
            <img 
              key={index} 
              src={`icons/${amenity}.svg`} 
              alt={amenity} 
              width={getAmenityDimensions(amenity)} 
              height={getAmenityDimensions(amenity)}
            />
          ))}
        </div>
        <p className="recommendation_main_description">{recommendation.description}</p>
        <button className="recommendation_button">Ver más</button>
      </div>
    </div>
  )
}
