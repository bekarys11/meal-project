function BaseHeader() {
    const menu = ['Home', 'All restaurants'];

    let links = menu.map(text => {
        return (
            <li key={text} className="list">
                <a href="#">{text}</a>
            </li>
        )
    })

    return (
        <header>
            <ul>
                {links}
            </ul>
        </header>
    );
}

export default BaseHeader;