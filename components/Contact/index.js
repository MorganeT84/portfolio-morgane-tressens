import { useState } from 'react';
import Validate from './Validate/index';

import styles from './contact.module.scss';



const Contact = () => {

  const [formData, setFormData] = useState({
    pseudo: "",
    name: "",
    email: "",
    email1: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');

    const dataContact = {
      pseudo: formData.pseudo,
      name: formData.name,
      email1: formData.email1,
      email: formData.email,
      message: formData.message,
    };

    // condition to deceive spambots
    let x = document.forms["contact"]["pseudo"].value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
      body: JSON.stringify(dataContact)
    };

    if (x == "" || x == null) {
      fetch(
        // URL de l'API
        '/api/contact',
        requestOptions,
      )
        .then((res) => {
          console.log('Response received');
          if (res.status === 200) {
            console.log('Response succeeded!');
            console.log(res);
            setSubmitted(true);
            setFormData(res);
          }
        })
        .catch((error) => {
          console.warn(error);
          console.log('catch error');
        });
    }

  };

  return (
    <div className={styles.container_form}>
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
      {submitted ? <Validate />
        : (
          <form name='contact' onSubmit={handleSubmit}>
            <div className={styles.form_field_field}>
              <label htmlFor="pseudo">Ne pas remplir</label>
              <input type="text" value={formData.pseudo || ''} onChange={(e) => setFormData({ ...formData, pseudo: e.target.value })} className={styles.fullname} name="pseudo" placeholder="Ne pas remplir" autoComplete='false' />
            </div>
            <div className={styles.form_field}>
              <label htmlFor="name">Votre Nom*</label>
              <input type="text" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={styles.fullname} name="name" placeholder="Nom" required />
            </div>
            <div className={styles.form_field_field}>
              <label htmlFor="email">Ne pas remplir</label>
              <input type="email" value={formData.email1 || ''} onChange={(e) => setFormData({ ...formData, email1: e.target.value })} className={styles.email} name="email1" placeholder="Ne pas remplir" autoComplete='false' />
            </div>
            <div className={styles.form_field}>
              <label htmlFor="email">Votre email*</label>
              <input type="email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={styles.email} name="email" placeholder="nom@example.com" required />
            </div>
            <div className={styles.form_field}>
              <label htmlFor="message">Votre message*</label>
              <textarea type="message" value={formData.message || ''} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={styles.message} name="message" placeholder="Laissez votre message ici" required rows="4"></textarea>
            </div>
            <div className={styles.form_field}>
              <button type="submit" name="submit" className={styles.submit}>Envoyer</button>
            </div>
          </form>
        )}
    </div>

  );


};



export default Contact;