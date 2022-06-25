import styles from './profil.module.scss';


const Profil = () => (
  <div className={styles.profil}>
    <div className={styles.bloc}>
      <h2> Développeuse web fullstack</h2>
      <p>
        Mon parcours reste atypique, je suis partie de l’animation jeune public pour ensuite réaliser une très belle expérience en tant qu’assistante vétérinaire durant 14 années me permettant d’acquérir de la compétence telles que l’organisation, l’écoute, le conseil ainsi que des qualités relationnelles.<br />Je suis passionnée par la création de projets et toutes les couches qu’elle représente; ce qui me procure la joie de travailler chaque jour avec envie, motivation et des idées en mouvements permanants.
      </p>
      <a download href="/download/morganetressens-cv.pdf" className={styles.pdffile} > Télécharger mon C.V. </a>
    </div>

    <div className={styles.parcours}>
      <div className={styles.bloc}>
        <h2> Une formation</h2>
        <p>
          En 2020, une grande décision qui a donné du sens à ce que je voulais réaliser pour mes futures années professionnelles, en commençant à découvrir le code et la programmation pour ainsi créer mes premières pages web.<br />
          Convaincue par l'appétence que je porte à cette nouvelle activité, j'entreprends les démarches pour intégrer une formation avec l'école O’clock. Le 7 Juin 2021, 9 a.m., j’embarque à bord de la promotion Valkyrie pour 24 semaines intenses dans l’apprentissage du développement web full stack.
        </p>

        <h3>SOCLE</h3>
        <p>
          Nous avons suivi cette formation en nous familiarisant avec l’environnement Linux et la ligne de commande. Chaque jour nous nous sommes confrontés à des challenges en réalisant une partie ou l'intégralité d'un projet en autonomie ainsi qu’en équipe. Pour fluidifier le travail de groupe, nous avons utilisé l’outil Git.
        </p>
        <p>
          Le point de départ  de cet apprentissage commence par la manipulation du html et css pour réaliser une interface statique et responsive à partir d’une maquette que nous apprendrons aussi à concrétiser.<br />
          Nous avons travaillé JavaScript vanilla pour façonner l’expérience utilisateur, en créant de l’interactivité sur nos pages. <br />
          Ensuite nous avons abordé la programmation avec PHP pour faire vivre une page web de manière dynamique et fonctionnelle avec la programmation Orientée Objet. Nous avons appris la gestion des bases de données (MySQL), structurer une application, modéliser et organiser des données. Nous avons suivi le modèle MVC pour l'architecture de nos applications. Nous avons mis en place des infrastructures techniques d’administration sécurisées.
        </p>
        <h3>React</h3>
        <p>
          Au début de ma formation, j’étais débutante, le côté front d’une application était plus concret à mes yeux, puis j’ai découvert PHP et mon choix d’une spécialisation pour conclure ma formation a été un dilemme… Je décide d’aller au bout de mon idée en commençant par apprendre cette bibliothèque Javascript.
        </p>
        <p>
          Pour commencer nous avons travaillé sur les principes de la programmation fonctionnelle et déclarative.
          Nous avons étudié une architecture de composants réutilisables et paramétrables pour établir la base d’une application React via les différentes manières d’écrire nos composants (orientée objet en classes ou une approche fonctionnelle avec les hooks).<br />
          Pour établir des requêtes HTTP en Ajax dans nos applications vers une API, nous avons appris à utiliser la bibliothèque Axios, à manipuler la bibliothèque Redux pour gérer la manipulation du DOM et son état.
        </p>
        <h3>Symfony</h3>
        <p>
          Fin de cette belle aventure au sein de l'école O'clock, je décide de me former sur ce framework PHP, en autonomie via les fiches récap de l'école et la documentation symfony.
          En cours d'apprentissage...
        </p>
      </div>
      <div className={styles.bloc}>
        <h2> Softskill</h2>
        <ul>
          <li>Communication et esprit d'équipe</li>
          <li>Esprit d'entre-aide</li>
          <li>Patience</li>
          <li>Capacité à effectuer des recherches et formuler mon problème pour trouver des solutions</li>
          <li>Créativité</li>
          <li>Curiosité</li>
          <li>Adaptabilité et curiosité face à l'inconnu</li>
          <li>Rigeur</li>
        </ul>
      </div>
      <div className={styles.bloc}>
        <h2>Mes compétences</h2>
        <ul>
          <li>Maqueter une application</li>
          <li>Realiser une interface statique et responsive</li>
          <li> Développer une interface utilisateur web dynamique</li>
          <li>Créer une base de données</li>
          <li>Développer les composants d’accès aux données</li>
          <li>Développer la partie back-end d’une application web ou web mobile</li>
        </ul>

        <div className={styles.bloc}>
          <h2>Opquast</h2>
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


