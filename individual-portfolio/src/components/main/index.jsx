import Overview from './components/Overview'
import MainAboutMe from './components/MainAboutMe'
import '../../styles/main/main.css'

function Main() {

    return (
        <main className='main grid'>
            <Overview></Overview>
            <MainAboutMe />
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