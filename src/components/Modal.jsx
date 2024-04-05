function Modal({ description, quantity, sum, heading, price, increase }) {
    return (
        <div className="modal">
            <h2>{heading}</h2>
            <p>{description}</p>
            <div>
                <button>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
            <button>add for € {sum}</button>
        </div>
    );
}

export default Modal;