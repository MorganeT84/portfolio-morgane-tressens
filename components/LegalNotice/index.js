// import
import Link from 'next/link';
import styles from './legalNotice.module.scss';

const LegalNotice = () => (
  <section className={styles.legal}>
    <article className={styles.detail}>
      <h2>Conditions générales</h2>
      <p>
        Les présentes conditions générales fixent les modalités d’utilisation du site <spans>https://morganetressens.com/</spans>.<br />
        L’utilisateur reconnait en avoir pris connaissance et les accepter.
      </p>
      <ul>
        <li>
          <p>Editeur et responsable de la publication :</p>
          <p>Ce site est édité par Tressens Morgane. </p>
        </li>
        <li>
          <p>Hébergement :</p>
          <p>
            Ce site est hébergé par Hostinger.<br />
            Siège social : HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre,<br />
            joignable par le moyen suivant :https://www.hostinger.fr/contact.
          </p>
        </li>
        <li>
          <p>Données personnelles : </p>
          <p>
            Les données collectées par le formulaire de contact sont utilisées pour permettre à Tressens Morgane de vous contacter, pour répondre à votre demande.
            Ce site ne collecte pas de cookies.
          </p>
        </li>
        <li>
          <p>Droits d’auteur :</p>
          <p>
            La reproduction ou représentation, intégrale ou partielle, du contenu de ce site est interdite  sans autorisation préalable de l’éditeur.<br />
            La création de liens hypertextes vers ce site est également soumise à l&apos;accord préalable de l’éditeur.
          </p>
        </li>
      </ul>
    </article>

    <article className={styles.detail}>
      <h2>Politique de confidentialité</h2>
      <div className="description">
        <p>
          Les données collectées par le formulaire de contact sont utilisées pour permettre à Tressens Morgane de vous contacter, pour répondre à votre demande.
          Ce site ne collecte pas de cookies.
        </p>
        <div className={styles.contact}>
          <p>
            Vous avez la possibilité d’exercer l’ensemble de vos droits sur vos données personnelles détenues par Tressens Morgane via le formulaire de contact &#10132;
          </p>
          <div className={styles.link}>
            <Link href="/contact" passHref>
              <a title="redirection vers la page de contact" className={styles.link_contact}>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  </section>
);

export default LegalNotice;
