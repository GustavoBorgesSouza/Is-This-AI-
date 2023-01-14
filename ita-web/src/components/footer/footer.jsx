import "../../assets/css/footer.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="containerF">
            <div className="c-footer">
                <p className="c-footer__text">Developed by Gustavo Borges de Souza</p>

                <section className="c-icons">
                    <a className="c-icons__icon" href="https://www.linkedin.com/in/gustavoborgessouza/ "> <FontAwesomeIcon icon={faLinkedin} size="2x" style={{backgroundColor:"var(--secondary-color)", color: "var(--background-color)"}} /> </a>
                    <a className="c-icons__icon"  href="https://github.com/GustavoBorgesSouza"><FontAwesomeIcon icon={faGithubSquare} size="2x" style={{backgroundColor:"var(--secondary-color)"}} /></a>
                </section>
            </div>
        </footer>
    );
}