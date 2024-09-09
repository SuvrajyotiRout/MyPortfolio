import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/experience.json"
import { getImageurl } from "../../util";

const Experience =()=>{
    return <section className ={styles.container} id="skills">
<h2 className ={styles.title} >Skills</h2>
    <div className ={styles.content}>
        <div className ={styles.skills}>
            {skills.map((skill,id)=>{
                return (
                    <div key={id} className ={styles.class}>
                        <div className ={styles.skillImageContainer}>
                            <img src={getImageurl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                )
            })}
        </div>
        
        <ul className={styles.history} id="experience">
        <h2 className ={styles.title}>Experience</h2>
            {history.map((historyItem ,id)=>{
                return (
<li key={id} className={styles.historyItem}>
    
    <img src={getImageurl(historyItem.imageSrc)} alt={`${historyItem.Organization} Logo`} />
    <div className={styles.historyItemDetails}>
        <h3>{`${historyItem.role},${historyItem.Organization}`}</h3>
        <p >{`${historyItem.Startdate} - ${historyItem.EndData}`}</p>
        <ul>
            {historyItem.experience.map((expe,id)=>{
                return <li key={id}>{expe}</li>
            })}
        </ul>
    </div>
</li>
                )
            })}

        </ul>
    </div>
    </section>
}
export default Experience