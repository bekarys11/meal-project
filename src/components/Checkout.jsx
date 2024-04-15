import { Link } from "react-router-dom";

function Checkout({ meals, total, close, changeQuantity }) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <h3>Your order</h3>
            <button onClick={close}>x</button>
            {
                meals.map(meal => {
                    return (
                        <div key={meal.id}>
                            <h4>{meal.name}</h4>
                            <p>{meal.description}</p>
                            <p>{meal.price}</p>
                            <select onChange={(e) =>
                                changeQuantity(
                                    {
                                        id: meal.id,
                                        quantity: e.target.value
                                    }

                                )}>
                                {
                                    nums.map(num => <option key={num} value={num}>{num}</option>)
                                }
                            </select>
                        </div>
                    )
                })
            }
            <p>Total € {total}</p>
            <Link to="/form">Checkout</Link>
        </div>
    );
}

export default Checkout;