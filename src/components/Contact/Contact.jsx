import styles from "./Contact.module.css"
import { getImageurl } from "../../util"

 const Contact =()=>{
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to Reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageurl("linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/suvrajyoti-rout-2b26792a7?">linkedin.com/suvrajyotirout</a>
            </li>
            <li className={styles.link}>
                <img src={getImageurl("email.png")} alt="Email" />
                <a href="mailto:suvrajyotirout90@gmail.com">suvrajyotirout90@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageurl("githubIcon.png")} alt="GitHub" />
                <a href="https://github.com/SuvrajyotiRout">github.com/suvrajyotirout</a>
            </li>
        </ul>
    </footer>
 }
 export default Contact