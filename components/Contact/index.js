import styles from './contact.module.scss';

import { Row, Col, FloatingLabel, Form } from 'react-bootstrap';



const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Contactez-moi</h1>
        <div className={styles.contact_info}>
          <p className={styles.adress}>
            <span>66000 Perpignan</span> - <span>France</span>
          </p>
          <p className={styles.phone}>
            <a href="+33619068284" title="téléphone" className={styles.phone_number}>+33 623 618 830</a>
          </p>
          <p className={styles.mail}>
            <a href="morganetressens@gmail.com" title="email" className={styles.email}>morganetressens@gmail.com</a>
          </p>
        </div>

      </div>
      <form action="" method="">
        <div className={styles.form_field}>
          <label for="fullname">Votre Nom</label>
          <input type="text" className={styles.fullname} name="name" placeholder="Nom" required autofoucus />
        </div>
        <div className={styles.form_field}>
          <label for="email">Votre email</label>
          <input type="email" className={styles.email} name="email" placeholder="name@example.com" required />
        </div>
        <div className={styles.form_field}>
          <label for="message">Votre message</label>
          <textarea type="message" className={styles.message} name="message" placeholder="Laissez votre message ici" required rows="4"></textarea>
        </div>
        <div className={styles.form_field}>
          <button type="submit" name="submit" className={styles.submit}>Envoyer</button>
        </div>
      </form>
    </div>

  );


};



export default Contact;