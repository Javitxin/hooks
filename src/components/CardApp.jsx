

function CardApp ({title, name, image}) {

    return(
        <div>
            <h2>{title}</h2>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default CardApp