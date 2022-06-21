import PropTypes from 'prop-types';
import styles from './cardproject.module.scss';

import Image from 'next/image';
import { Accordion } from 'react-bootstrap';


const CardProject = ({ dataProject }) => {

  return (
    <Accordion className={styles.accordion}>
      {
        dataProject.map((project) => (
          <Accordion.Item eventKey={project.id} key={project.id}>
            <Accordion.Header >
              <div className={styles.header}>
                <div className={styles.project_title}>
                  <h2 className={styles.title_h2}>{project.name}</h2>
                  <p className={styles.title_p}>{project.text}</p>
                </div>
                <div className={styles.logo_project}>
                  <Image
                    src={project.logo}
                    alt="Galerie d'art MYAS Gallery"
                    layout='responsive'
                    width={500}
                    height={300}
                    objectFit="contain"
                    sizes='50vw'
                  />
                </div>
              </div>

            </Accordion.Header>
            <Accordion.Body>
              <article className={styles.project_description}>
                <h3>Présentation</h3>
                <p dangerouslySetInnerHTML={{ __html: project.description }} />

                <h3>Objectifs</h3>
                <p>{project.objectifs}</p>

                <h3>Rôle utilisateurs de l’application</h3>
                <p>{project.role}
                </p>

                <h3>Technologies utilisées côté Front</h3>
                <ul>
                  {
                    project.techno_front.map((front) => (
                      <  li className={styles.title_li} key={front.id} >{front.name}</li>
                    ))
                  }
                </ul>

                <h3>Technologies utilisées côté Back</h3>
                <ul>
                  {
                    project.techno_back.map((back) => (
                      <li className={styles.title_li} key={back.id} >{back.name}</li>
                    ))
                  }
                </ul>

                <h3>Gestion du projet</h3>
                {
                  project.gestion.map((orga) => (
                    <div key={orga.id} >
                      <p>Cette application a été développée en {orga.gestion}.</p>
                      <p dangerouslySetInnerHTML={{ __html: orga.description }} />
                    </div>

                  ))
                }
                <h3>Déployement</h3>
                {
                  project.deployement.map((orga) => (
                    <div key={orga.id} >
                      <p>Ce site a été déployé via un hébergement {orga.type} chez {orga.name}.</p>
                      <p dangerouslySetInnerHTML={{ __html: orga.description }} />
                    </div>

                  ))
                }
              </article>
              <a href={project.url} title={`visiter le site de ${project.name}`} className={styles.button_link}>Visiter</a>
            </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  );
}

// validating props
CardProject.propTypes = {
  dataProject: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      objectifs: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      techno_front: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      techno_back: PropTypes.arrayOf(
        PropTypes.shape({

        }).isRequired,
      ).isRequired,
      gestion: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          gestion: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        }).isRequired,
      ).isRequired,
      deployement: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        }).isRequired,
      ).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default CardProject;


