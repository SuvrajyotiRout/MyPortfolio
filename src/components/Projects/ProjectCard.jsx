import styles from "./ProjectCard.module.css"
import {getImageurl} from "../../util"
const ProjectCard =({project})=>{
   return (
    <div className={styles.container}>
    <img src={getImageurl(project.ImageSrc)} alt={project.title} className={styles.image}/>
    <h3 className={styles.title}>{project.title}</h3>
    <p className={styles.description}>{project.description}</p>
    <ul className={styles.skills}>
        {project.technology.map((techs,id)=>{
           return <li key={id} className={styles.skill}>{techs}</li>
        })}
    </ul>
    <div className={styles.links}>
    <a href={project.source} className={styles.link}>Source Code</a>
    </div>
</div>
   )
}
export default ProjectCard