import { getImageurl } from "../../util";
import styles from "./About.module.css"

const About =()=>{
    return <section className={styles.container} id ="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageurl("hacker.png") } className={styles.aboutimage} />
            <ul className={styles.aboutitems}>
                <li className={styles.aboutitem}>
                    <img src={getImageurl("cursorIcon.png")} />
                    <div className={styles.aboutitemText}>
                        <h3>Frontend developer</h3>
                        <p>
                        Creates dynamic, responsive web interfaces with React js,Bootstarp and Material UI ensuring engaging, user-friendly experiences across all devices and screen sizes
                        </p>
                    </div>
                </li>
                <li className={styles.aboutitem}>
                    <img src={getImageurl("serverIcon.png")} />
                    <div className={styles.aboutitemText}>
                        <h3>Backend developer</h3>
                        <p>
                        Developed scalable, high-performance server-side applications using Node.js and Express, optimizing data management and ensuring smooth, reliable operations
                        </p>
                    </div>
                </li>
                <li className={styles.aboutitem}>
                    <img src={getImageurl("figma.png")} />
                    <div className={styles.aboutitemText}>
                        <h3>UI Designer</h3>
                        <p>
                        Designes intuitive, user-focused interfaces through detailed wireframes and prototypes, enhancing user interaction with visually appealing and functional design solutions
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}
export default About;