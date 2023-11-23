import DashboardMain from '../../../assets/project-images/dashboard-main.png'
import GithubLogo from '../../../assets/misc/github-logo.svg'
import '../../../styles/main/main-projects.css'

function MainProjects() {

    return (
        <section id='projects' className='main-projects grid'>
            <h2 className='main-projects--header'>Projects</h2>
            <div className='main-projects--container grid'>
                <article className='main-projects--project grid'>
                    <section className='project-info grid'>
                        <h3 className='project-info--header'>Social Media Post Feed Dashboard</h3>
                        <div id='description' className='project-info--description grid'>
                            <h4 className='project-info--description--header'>Description</h4>
                            <p className='project-info--description--text'>I built this social media style community post dashboard from scratch as a part of my Boolean bootcamp. I used a reference image provided by Boolean to guide the styling of the application. <br /> <br /> A user can create a new post, delete existing comments and posts, create a new user and also update existing user details. <br /> <br />I used an API as my data source and used the relevant API methods in order to send relevant requests to achieve the aforementioned behaviours.</p>
                            <p className='project-info--description--link'>Click here to view more about this app!</p>
                        </div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul className='project-info--tech-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                    </section>
                    <div className='project-image--container grid'>
                        <img className='project-image--image' src={DashboardMain} alt="dashboard project main photo"/>
                        <a className='project-image--github-link grid' target='_blank' href="https://github.com/Satokii/react-cohort-dashboard-challenge" rel="noreferrer">
                            Github Link
                            <img src={GithubLogo} alt="github logo" width={20} />
                        </a>
                    </div>
                </article>
                <article className='main-projects--project grid'>
                    <img src="" alt="" />
                    <section>2 text</section>
                </article>
                <article className='main-projects--project grid'>
                    <section>
                        <h3>My current work-in-progress:</h3>
                    </section>
                    <img src="" alt="" />
                </article>
            </div>
        </section>
    )
}

export default MainProjects