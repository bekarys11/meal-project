import { useState } from "react";

function CheckboxText({ children, onClick }) {
    const [txt, setText] = useState("Выбрать все")

    return (
        <div>
            <input type="checkbox" name="" id="check" onChange={onClick} />
            <label htmlFor="check">{children}</label>
        </div>
    );
}

export default CheckboxText;