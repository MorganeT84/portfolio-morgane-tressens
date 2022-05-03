import styles from './footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
  <footer className={styles.navbottom}>

    <div className={styles.info_andco}>
      <a href="https://github.com/MorganeT84" title="lien de redirection vers profil github" className={styles.social_media}>
        <FontAwesomeIcon icon={faGithub} className={styles.fa_github} />
      </a> 
      <a href="https://www.linkedin.com/in/morgane-tressens-7aa38116b/" title="lien de redirection vers linkedin" className={styles.social_media} >
        <FontAwesomeIcon icon={faLinkedin} className={styles.fa_linkedin_in} />
      </a>

    </div>
  </footer>
);

export default Footer;


