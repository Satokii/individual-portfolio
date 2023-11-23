import DashboardMain from '../../../assets/project-images/dashboard-main.png'
import '../../../styles/main/main-projects.css'

function MainProjects() {

    return (
        <section id='projects' className='main-projects grid'>
            <h2 className='main-projects--header'>Projects</h2>
            <div className='main-projects--container grid'>
                <article className='main-projects--project grid'>
                    <section className='project-info grid'>
                        <h3 className='project-info--header'>Social Media Post Feed Dashboard</h3>
                        <div className='project-info--description grid'>Description</div>
                        <div className='project-info--tech grid'>
                            <h4 className='project-info--tech-header'>Tech Used</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                    </section>
                    <div>
                        <img src={DashboardMain} alt="dashboard project main photo" width={800} />
                        <p>Github Link</p>
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