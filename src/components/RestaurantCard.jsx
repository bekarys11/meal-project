import starIcon from '/Star.svg'

function RestaurantCard({ name, rating, photoUrl, specialty, categories }) {
    let listCategories = categories.map(category => <li key={category}>{category}</li>)

    return (
        <div>
            <img src={photoUrl} alt="" width={427} />
            <p>{name}</p>
            <div>
                <img src={starIcon} alt="" />
                <span>{rating}</span>
            </div>
            <p>{specialty}</p>
            <ul>
                {listCategories}
            </ul>
        </div>
    );
}

export default RestaurantCard;