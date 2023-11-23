import '../../styles/header/header.css'

function Header() {

    return (
        <header className='header grid'>
            <h1 className='logo'>Satoki Ito</h1>
            <nav className='header-nav grid'>
                <ul className='header-nav-list grid'>
                    <li>About Me</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header