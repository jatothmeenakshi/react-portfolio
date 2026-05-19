
import ProjectCard from './ProjectCard';
function Projects(){
    return(
        <div className="project">
            <div className="project-cards">
            <h2>Projects</h2>
            <ProjectCard title="Portfolio Website " description=" Built with HTML,CSS &JavaScript"/>
            <ProjectCard title="React " description=" Built with React.js"/>
            <ProjectCard title="AI/ML" description="coming soon"/>
        </div>
        </div>
    );
}
export default Projects;