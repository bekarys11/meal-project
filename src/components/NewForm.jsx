function NewForm() {

    function onSubmit(event) {
        event.preventDefault()
        alert("отправил форму")
    }

    return (
        <form action="">
            <input type="text" />
            <button onClick={(event) => onSubmit(event)} type="submit">Отправить форму</button>
        </form>
    );
}

export default NewForm;