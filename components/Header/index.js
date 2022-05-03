import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

import styles from './header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogoMT from '../../public/images/logo-mt.png';
import Image from 'next/image';

const Header = () => (
  <Navbar collapseOnSelect expand="lg" className={styles.navbar_burger}>
    <Container>
      <Link href="/" passHref>
        <a className={styles.brand} title='Morgane Tressens développeuse web logo'>
          <Image
            src={LogoMT}
            alt="Morgane Tressens développeuse web"
            width='400'
            height='400' />
        </a>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="me-auto">
          <Link href="/projets" passHref>
            <a className={styles.link} title='page des projets réalisés'>Projets réalisés</a>
          </Link>
          <Link href="/techno" passHref>
            <a className={styles.link} title='page des technologies maîtrisées' >Technologies</a>
          </Link>
          <Link href="/cv" passHref>
            <a className={styles.link} title='page du curiculum vitae' >Profil</a>
          </Link>
          <Link href="/contact" passHref>
            <a className={styles.link} title='page de contact'>Contact</a>
          </Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;