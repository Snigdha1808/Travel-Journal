export default function TravelCard(props) {
  return (
    <div className="travel-card">
      <img src={props.imageUrl} className="travel-image" alt={props.title} />
      <div className="travel-info">
        <div className="travel-location">
          <span>📍{props.location} </span>
          <a href={props.googleMapsUrl} target="_blank"><button className="btn">View Here</button></a>
        </div>
        <h2>{props.title}</h2>
        <p className="travel-date">{props.startDate} - {props.endDate}</p>
        <p className="travel-description">{props.description}</p>
      </div>
    </div>
  )
}
