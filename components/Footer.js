import styles from "../styles/Footer.module.css";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    function linkedin() {
        window.location.href =
            "https://www.linkedin.com/in/douglas-biassi-gavioli-b79653186/";
    }
    return (
        <footer className={styles.footer}>
            <p>
                <span>PokeNext</span> &copy; 2022
            </p>
            <p>Dev by: Douglas Biassi Gavioli</p>
            <li>
                <FaLinkedin onClick={linkedin} />
            </li>
        </footer>
    );
}
