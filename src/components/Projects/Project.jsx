import styles from "./Project.module.css"
import Projects from "../../Data/Projects.json"

import ProjectCard from "./ProjectCard"
const Project = ()=>{
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {Projects.map((project,id)=>{
                    return(
                      <ProjectCard key={id} project={project}/>
                    )
                })}
            </div>
        </section>
    )
}
export default Project