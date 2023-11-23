import Overview from './components/Overview'
import HTMLLogo from '../../assets/tech-stack-logos/html-logo.svg'
import CSSLogo from '../../assets/tech-stack-logos/css-logo.svg'
import JSLogo from '../../assets/tech-stack-logos/js-logo.svg'
import ReactLogo from '../../assets/tech-stack-logos/react-logo.svg'
import GitLogo from '../../assets/tech-stack-logos/git-logo.svg'
import '../../styles/main/main.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate()

    const INITIAL_STATE = {
        name: '',
        className: ''
    }

    const [showTechStackText, setShowTechStackText] = useState(INITIAL_STATE)

    function removeText() {
        setShowTechStackText(INITIAL_STATE)
    }

    function toggleText(e) {
        const { name, className } = e.target
        setShowTechStackText({name: name, className: className})
    }

    return (
        <main className='main grid'>
            <Overview></Overview>
            <section id='about-me' className='about-me grid'>
                <h2 className='about-me-header'>About Me</h2>
                <p>I have learnt a range of skills in my journey so far. I have experience working with:</p>
                <div onMouseOut={removeText} className='tech-stack-logos grid'>
                    <img className='js-logo' name='JavaScript' onMouseOver={toggleText}  src={JSLogo} alt="js logo" width={200} />
                    <img className='html-logo' name='HTML' onMouseOver={toggleText}  src={HTMLLogo} alt="html logo" width={200}/>
                    <img className='git-logo' name='Git' onMouseOver={toggleText}  src={GitLogo} alt="git logo" width={200} />
                    <img className='css-logo' name='CSS' onMouseOver={toggleText}  src={CSSLogo} alt="css logo" width={200}/>
                    <img className='react-logo' name='React' onMouseOver={toggleText}  src={ReactLogo} alt="react logo" width={200} />
                </div>
                <div className='tech-stack-text grid'>
                    <p className={showTechStackText.className}>{showTechStackText.name}</p>
                </div>
                <p onClick={() => navigate('/about-me')}>Click here to read more about me</p>
                <p>Have a look at some of my work below:</p>
            </section>
            <section id='projects' className='projects'>
                <h2>Projects</h2>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <h3>My current work-in-progress:</h3>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
            </section>
        </main>
    )
}

export default Main