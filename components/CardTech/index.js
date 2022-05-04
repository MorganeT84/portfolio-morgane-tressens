import PropTypes from 'prop-types';
import styles from './cardTech.module.scss';

import Image from 'next/image';
import { Card, ProgressBar } from 'react-bootstrap';

import LogoMG from '../../public/images/logoMG.jpg';


const CardTech = ({ dataTechno }) => { 
  return (
    <div className={styles.list_techno}>
      {
        dataTechno.map((techno) => (
          <Card style={{ width: '18rem' }} key={techno.id} className={styles.card_techno}>
            <Image
              src={techno.photoUrl}
              alt="Galerie d'art MYAS Gallery"
              width='200'
              height='200'
            />
            <Card.Body>
              <Card.Title>{techno.name}</Card.Title>
              <Card.Text>
                {techno.text}
                {techno.pictureUrl}
              </Card.Text>
              <ProgressBar animated now={techno.level} />
            </Card.Body>
          </Card>
        ))
      }
    </div>

  );


};

// validating props
CardTech.propTypes = {
  dataTechno: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CardTech;


