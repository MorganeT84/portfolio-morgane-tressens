import styles from './validate.module.scss';

const Validate = () => (
  <div className={styles.validate_post}>
    <p>
      <span>&#9989;</span><br />
      Votre message a bien été envoyé,
      <br />
      je vous réponds dans la journée.
      <br />
      Merci et à bientôt
    </p>

  </div>
);

export default Validate;
