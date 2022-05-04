import styles from './cardproject.module.scss';

import Image from 'next/image';
import { Accordion } from 'react-bootstrap';

import LogoMG from '../../public/images/logoMG.jpg';
import LogoCT from '../../public/images/logoCT.png';

const CardProject = () => (
  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <div className={styles.project_title}>
          <h2>Myas Gallery</h2>
          <p> Une galerie d'art qui vient à vous</p>
        </div>
        <Image
          src={LogoMG}
          alt="Galerie d'art MYAS Gallery"
          width='400'
          height='200' />
      </Accordion.Header>
      <Accordion.Body>
        <h3>Présentation</h3>
        <p>MYAS Gallery ou <strong>Make Your Art Shine Gallery</strong> est une galerie d’art qui diffuse des œuvres à tous. Cette galerie a pour objectif de représenter des artistes émergeants  sur différents évènements partout en France et en Europe. Elle a la particularité d’exister uniquement dans des endroits éphémères pour rassembler amateurs d’art, collectionneurs et artistes. Pour le moment, MYAS Gallery est présente sur des salons dédiés à l’art, elle a pour objectif de s’exposer sur des lieux divers et atypiques.<br />
          La galeriste, Muriel Léorat Cassard, fait partie de mon entourage proche et débute cette nouvelle aventure, tout comme moi avec le développement web. Je lui ai proposé de réaliser le site web de sa nouvelle activité professionnelle pour mon projet de fin de formation.
        </p>

        <h3>Objectifs</h3>
        <p>MYAS Gallery allant à la rencontre de son public a besoin d’un outil pour favoriser sa visibilité, ainsi exposer les œuvres de ses artistes et informer les amateurs de sa présence sur différents évènements dédiés à l’art. L’application remplira ce rôle et permettra aussi de contacter la galeriste pour plus d'informations. Une deuxième application est nécessaire pour la gestion de ces informations  gérée par la galeriste elle-même. Ces deux interfaces vont permettre à MYAS Gallery d’évoluer et d’être vivant sur le web.</p>
        <ul>
          <li>La page d’accueil permettra d’afficher :
            <ul>
              <li>les quatres prochains évènements</li>
              <li>l’affichage aléatoire de quatre artistes</li>
              <li>l’affichage aléatoire de cinq oeuvres</li>
            </ul>
          </li>
          <li>Une page listant tous les artistes
            <ul>
              <li>une page dédié à un seul artiste avec sa bio et ses oeuvres</li>
            </ul>
          </li>
          <li>Une page listant toutes les oeuvres
            <ul>
              <li>avec la possibilité d'accéder aux oeuvres par catégories</li>
              <li>une page dédié à une oeuvre avec une description et son artiste</li>
            </ul>
          </li>
          <li>Une page listant toutes les évènements
            <ul>
              <li>une page dédié à un événement avec plus de détails et une map de géolocalisation</li>
            </ul>
          </li>
          <li>une page avec un formulaire de contact</li>
          <li>Un back-office pour gérer l’ajout/suppression/modification des oeuvres/artistes/événements et leurs détails</li>
        </ul>

        <h3>Rôle utilisateurs de l’application</h3>
        <p>Cette application est libre d’accès, aucune authentification n'est nécessaire pour naviguer sur le site.
          Pour le back-Office la galeriste sera admin, après s'être connectée elle pourra accéder à la modification la suppression ou l’ajout d'œuvres, d’artistes et d'évènements.
          Un utilisateur non connecté n'a pas accès à ce back-office.
        </p>

        <h3>Technologies utilisées côté Front</h3>
        <ul>
          <li>HTML/JSX</li>
          <li>SASS</li>
          <li>NextJs</li>
          <li>React</li>
          <li>Connection aux données : Axios</li>
          <li>Carousel : Embla-carousel</li>
          <li>Carte : Leaflet</li>
        </ul>

        <h3>Technologies utilisées côté Back</h3>
        <ul>
          <li>Doctrine : ORM (object relational mapping) &gt; accès aux données</li>
          <li>PhpMyAdmin / Adminer : gestionnaire de base de données</li>
          <li>SQL/DQL: manipulation des données</li>
          <li>Bosstrap</li>
          <li>Twig</li>
        </ul>
        <a href="https://myas-gallery-next-myasgallerydev.vercel.app/" title="site d'une galerie d'art">Visiter</a>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <div className={styles.project_title}>
          <h2>Thérapeute Christine Toledo</h2>
          <p>Transfert quantique et Pler-Mo</p>
        </div>
        <Image
          src={LogoCT}
          alt="Therapeute Christine Toledo"
          width='200'
          height='200' />
      </Accordion.Header>
      <Accordion.Body>
        <h3>Présentation</h3>
        <p>La thérapeute <strong>Christine Toledo</strong> lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h3>Objectifs</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <ul>
          <li>La page d’accueil permettra d’afficher :
            <ul>
              <li>Une citation avec la photographie de la thérapeute</li>
              <li>des cartes avec un résumé court de toutes les pages du site avec lien de redirection</li>
            </ul>
          </li>
          <li> une page pour le Transfert quantique</li>
          <li>Une page pour le Pler-Mo</li>
          <li>Une page avec la bio de la thérapeute</li>
          <li>une page avec un formulaire de contact</li>
          <li>Une page rassemblant le formulaire de contact et les tarifs</li>
        </ul>

        <h3>Rôle utilisateurs de l’application</h3>
        <p>Cette application est libre d’accès, aucune authentification n'est nécessaire pour naviguer sur le site.</p>

        <h3>Technologies utilisées côté Front</h3>
        <ul>
          <li>HTML/JSX</li>
          <li>SASS</li>
          <li>NextJs</li>
          <li>React</li>
          <li>icon fortawesome</li>
           
        </ul>

        <h3>Technologies utilisées côté Back</h3>
        <ul>
          <li>Node &gt; serveur pour la récupération des données du formulaire de contact</li>
          <li>dotenv &gt; utilisation des mots de passe sécu</li>
          <li>Nodemailer &gt; pour l'envoie des données du formulaire sur l'adresse mail du client</li>
          <li>xoauth2 &gt; pour la sécurité de la boite mail gmail</li>
        </ul>
        <a href="https://therapeutechristinetoledo.vercel.app/" title="site d'une galerie d'art">Visiter</a>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default CardProject;

