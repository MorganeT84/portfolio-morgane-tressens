import styles from './validate.module.scss';
import validate from './check-mark-10120.svg';
import Image from 'next/image';

const Validate = () => (
  <div className={styles.validate_post}>
    <p>Votre message a bien été envoyé, <br />
      je vous réponds dans la journée.
      <br />
      <span>Merci et à bientôt</span>
    </p>
    <Image src={validate} alt="le formulaire à été envoyé" title="le formulaire à été envoyé" width={5} height={5}  sizes='50vw' />
  </div>
);

export default Validate;
