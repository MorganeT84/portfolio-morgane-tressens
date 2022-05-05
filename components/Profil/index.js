import styles from './profil.module.scss';


const Profil = () => (
  <div className={styles.profil}>
   <a download href="/download/morganetressens-cv.pdf" className={styles.pdffile} > Télécharger mon C.V. </a>
    <div className={styles.parcours}>
      <div className={styles.bloc}>
        <h2> Une formation</h2>
        <p>
          Le trente septembre deux mille vingt, j'investi dans un nouvel ordinateur pour entreprendre une nouvelle carrière professionnelle. Après quelques tutorielles de code pour découvrir et créer ma première page web, j’entreprends les démarches pour intégrer une formation avec l'école O’clock . <br />
          Auxiliaire vétérinaire depuis de 14 ans, j’ai commencé à scruter les codes sources des sites que je consultais dans le cadre de mon travail. Le 7 Juin 2021, 9 a.m.,  j’embarque à bord de la promotion Valkyrie pour 24 semaines intenses dans l’apprentissage du développement web.
        </p>
      </div>
      <div className={styles.bloc}>
        <h3>Mes compétences</h3>
        <p>
          Maqueter une application
        </p>
        <p>
          Realiser une interface statique et responsive
        </p>
        <p>
          Développer une interface utilisateur web dynamique
        </p>
        <p>
          Créer une base de données
        </p>
        <p>
          Développer les composants d’accès aux données
        </p>
        <p>
          Développer la partie back-end d’une application web ou web mobile
        </p>
        <h3>React</h3>
        <p>
          spé choisi
        </p>
        <h3>Symfony</h3>
        <p>
          en solo
        </p>
      </div>
      <div className={styles.bloc}>
        <h3>Opquast</h3>
        <p>
          suivi de la formation en ligne
          obtention du certif 795 points 10/02/2022
          <div className={styles.opquast}>
            <a download href="/download/morganetressens-opquast.pdf" className={styles.pdffile} > Télécharger </a>
          </div>
        </p>
      </div>
    </div>
   
  </div>
);

export default Profil;


