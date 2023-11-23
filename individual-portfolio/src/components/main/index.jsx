import ProfilePhoto from '../../assets/profile-photo.jpg'
import '../../styles/main.css'

function Main() {

    return (
        <main className='main grid'>
            <section className='overview grid'>
                <div className='overview-left grid'>
                    <header className='overview-header-container grid'>
                        <h2 className='overview-header grid'>Satoki Ito</h2>
                        <h3 className='overview-job-header'>Front End Developer</h3>
                    </header>
                    <div className='overview-quick-links grid'>
                        <p className='grid'>About Me</p>
                        <p className='grid'>Projects</p>
                    </div>
                </div>
                <div className='overview-right grid'>
                    <div className='profile-photo-container grid'>
                        <img className='profile-photo grid' src={ProfilePhoto} alt="profile photo" width={400} />
                    </div>
                    <div className='overview-text-container grid'>
                        <p className='overview-text'>Hi, my name is Satoki. <br /> I am a student on the Boolean Software Development bootcamp, currently working towards becoming a Full-Stack Developer.</p>
                    </div>
                </div>
            </section>
            <section>
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
            <section>
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