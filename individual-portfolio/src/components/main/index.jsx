import Overview from './components/Overview'
import '../../styles/main/main.css'

function Main() {

    return (
        <main className='main grid'>
            <Overview></Overview>
            <section id='about-me' className='about-me'>
                <h2>About Me</h2>
                <p>I have learnt a range of skills in my journey so far. I have experience working with:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git</li>
                </ul>
                <p>Have a look at some of my work below:</p>
            </section>
            <section id='projects' className='projects'>
                <h2>Projects</h2>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <div>blah blah blah blah blah </div>
                <h3>My current work-in-progress:</h3>
                <div>blah blah blah blah blah </div>
            </section>
        </main>
    )
}

export default Main