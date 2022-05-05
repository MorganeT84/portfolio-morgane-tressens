import styles from './footer.module.scss'; 


const Footer = () => (
  <footer className={styles.navbottom}>

    <div className={styles.info_andco}>
      <a href="https://github.com/MorganeT84" title="lien de redirection vers profil github" className={styles.social_media}>
        <i className={`fab fa-github ${styles['fa_github']}`}></i>
      </a>

      <a href="https://www.linkedin.com/in/morgane-tressens-7aa38116b/" title="lien de redirection vers linkedin" className={styles.social_media}><i className={`fab fa-linkedin-in ${styles['fa_linkedin_in']}`}></i></a>
    </div>
  </footer>
);

export default Footer; 
