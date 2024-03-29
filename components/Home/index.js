import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.scss';


import ProfilPicture from '../../public/images/morgane.png';
import LogoMT from '../../public/images/logo-mt.png';



const Home = () => (

  <div className={styles.home_page}>

    <div className={styles.illustration}>
      <Image
        src={LogoMT}
        alt="Morgane Tressens développeuse web logo"
        width='400'
        height='400' />
      <Image
        src={ProfilPicture}
        alt="photographie profil de Morgane Tressens"
        width='300'
        height='200'
      />
    </div>
    <h1>Développeuse web & mobile <br/> Morgane Tressens</h1>
    <p>Mon intérêt pour  le design, l’architecture, l’expérience utilisateur et la programmation me pousse à me diversifier un maximum pour concevoir et réaliser des sites web du cahier des charges à la mise en ligne. Je suis prête à participer à la réalisation de vos projets.</p>
    <div >
      <ul className={styles.navigation}>
        <li>
          <Link href="/projets" passHref>
            <a className={styles.link} title='page des projets réalisés'>Projets réalisés</a>
          </Link>
        </li>
        <li>
          <Link href="/techno" passHref>
            <a className={styles.link} title='page des technologies explorées' >Technologies</a>
          </Link>
        </li>
        <li>
          <Link href="/profil" passHref>
            <a className={styles.link} title='page du curiculum vitae' >Profil</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a className={styles.link} title='page de contact'>Contact</a>
          </Link>
        </li>
      </ul>
    </div>

  </div>
);

export default Home;


