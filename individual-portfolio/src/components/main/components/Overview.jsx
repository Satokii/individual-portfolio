import ProfilePhoto from '../../../assets/profile-photo.jpg'
import '../../../styles/main/overview.css'

function Overview() {

    return (
        <section id='overview' className='overview grid'>
            <div className='overview-left grid'>
                <header className='overview-header-container grid'>
                    <h2 className='overview-header grid'>Satoki Ito</h2>
                    <h3 className='overview-job-header'>Front End Developer</h3>
                </header>
                <div className='overview-quick-links grid'>
                    <h3 className='quick-links-header'>Jump to:</h3>
                    <a className='grid' href="#about-me">About Me</a>
                    <a className='grid' href='#projects'>Projects</a>
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
    )
}

export default Overview