function Modal({ description, quantity, sum, heading, price, increase, onClose, add }) {
    return (
        <div className="modal">
            <button onClick={onClose}>X</button>
            <h2>{heading}</h2>
            <p>{description}</p>
            <div>
                <button>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={add}>add for € {sum}</button>
        </div>
    );
}

export default Modal;