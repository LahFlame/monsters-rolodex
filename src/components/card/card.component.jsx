import "./card.styles.css"

export const Card = props => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monsters" />
            <h2 key={props.monster.key}>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
            
    )
}