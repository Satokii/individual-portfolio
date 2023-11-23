import { useNavigate } from 'react-router-dom'
import '../../styles/header/header.css'

function Header() {

    const navigate = useNavigate()

    return (
        <header className='header grid'>
            <h1 className='logo'>Satoki Ito</h1>
            <nav className='header-nav grid'>
                <ul className='header-nav-list grid'>
                    <li onClick={() => navigate('/about-me')}>About Me</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header