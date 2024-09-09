import styles from "./Navbar.module.css"
import { useState } from "react"
import { getImageurl } from "../../util"
const Navbar = ()=>{
    const [menuopen,setmenuopen]=useState(false)
    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} src={menuopen ? getImageurl("closeIcon.png"):getImageurl("menuIcon.png")} alt="menuicon" onClick={()=>setmenuopen(!menuopen)}/>
            <ul className={`${styles.menuitems} ${menuopen && styles.menuOpen}`} onClick={()=> setmenuopen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}
export default Navbar