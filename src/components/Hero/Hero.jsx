import styles from "./Hero.module.css"
import {getImageurl} from "../../util"
const Hero =()=>{
    return <section className={styles.container}>
<div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Pikun</h1>
    <p className={styles.description}>I,m a full-stack developer with 1 year of experience using MERN stack—MongoDB, Express.js, React, and Node.js to create dynamic, scalable applications. Reach out if you'd like to learn more ! </p>
    <a href="mailto:suvrajyotirout90@gmail.com" className={styles.contactbtn}>Contact me</a>
    </div>
    <img src={getImageurl("hero2.png")}  className={styles.heroImg}/>
    <div className={styles.topblur}></div>
    <div className={styles.bottomblur}></div>

    </section>

    
}
export default Hero