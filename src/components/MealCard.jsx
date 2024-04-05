function MealCard({ name, description, price, onShowModal }) {
    return (
        <div onClick={onShowModal} className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}

export default MealCard;