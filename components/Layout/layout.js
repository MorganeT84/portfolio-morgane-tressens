//import Header from "../Header/index";<Header />
import Footer from "../Footer/index";

import styles from './layout.module.scss';


const Layout = ({ children }) => (
  <div className={styles.app}>
    
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);
export default Layout
