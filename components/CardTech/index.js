import PropTypes from 'prop-types';
import styles from './cardTech.module.scss';

import Image from 'next/image';
import { Card } from 'react-bootstrap';

const CardTech = ({ dataTechno }) => { 
  return (
    <div className={styles.list_techno}>
      {
        dataTechno.map((techno) => (
          <Card style={{ width: '18rem' }} key={techno.id} className={styles.card_techno}>
            <Image
              src={techno.photoUrl}
              alt={techno.name}
              width='200'
              height='200'
            />
            <Card.Body className={styles.card_body}>
              <Card.Title>{techno.name}</Card.Title>
              <Card.Text>
                {techno.text}
                {techno.pictureUrl}
              </Card.Text> 
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


