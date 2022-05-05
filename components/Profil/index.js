import styles from './profil.module.scss';


const Profil = () => (
  <div className={styles.profil}>
   <div className={styles.bloc}>
        <h2> Développeuse web fullstack</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a download href="/download/morganetressens-cv.pdf" className={styles.pdffile} > Télécharger mon C.V. </a>
      </div>
    
    <div className={styles.parcours}>
      <div className={styles.bloc}>
        <h2> Une formation</h2>
        <p>
          Le trente septembre deux mille vingt, j'investis dans un nouvel ordinateur pour entreprendre une nouvelle carrière professionnelle. Après quelques tutorielles de code pour découvrir et créer ma première page web, j’entreprends les démarches pour intégrer une formation avec l'école O’clock . <br />
          Auxiliaire vétérinaire depuis de 14 ans, j’ai commencé à scruter les codes sources des sites que je consultais dans le cadre de mon travail. Le 7 Juin 2021, 9 a.m.,  j’embarque à bord de la promotion Valkyrie pour 24 semaines intenses dans l’apprentissage du développement web.
        </p>
      </div>
      <div className={styles.bloc}>
        <h2> Softskill</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        <h4>React</h4>
        <p>
          spé choisi
        </p>
        <h4>Symfony</h4>
        <p>
          en solo
        </p>
        <div className={styles.bloc}>
          <h4>Opquast</h4>
          <p>
            suivi de la formation en ligne
            obtention du certif 795 points 10/02/2022
            <span className={styles.opquast}>
              <a download href="/download/morganetressens-opquast.pdf" className={styles.pdffile} >Télécharger</a>
            </span>
          </p>
        </div>
      </div>

    </div>

  </div>
);

export default Profil;


