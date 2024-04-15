import { useState } from 'react';
import { useNewCreateOrderMutation } from '../api/posts';
import { useDispatch } from 'react-redux';

function OrderForm() {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1);
    const [firstName, setfirstName] = useState("");
    const [createOrder, result] = useNewCreateOrderMutation()

    function onSubmit() {

        createOrder({
            first_name: firstName,
            last_name: 'Ташенова',
            email: 'gulya@gmail.com',
            phone: 7774562323,
            street_name: 'Желтоксан',
            house_number: '1',
            zip_code: '333ASD',
            city: 'Шымкент',
            meal_ids: [2, 4],
        })
    }

    return (
        <>
            {
                step === 1 &&
                <div>
                    <label htmlFor="" >First name</label>
                    <input type="text" placeholder='Mando' value={firstName} onInput={(e) => setfirstName(e.target.value)} />
                    <button onClick={onSubmit}>place order</button>
                </div>
            }

            {
                step === 2 &&
                <div>
                    шаг два
                </div>
            }
        </>

    );
}

export default OrderForm;