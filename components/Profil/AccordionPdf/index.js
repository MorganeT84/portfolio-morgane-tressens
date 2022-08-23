import Accordion from 'react-bootstrap/Accordion';

import styles from '../profil.module.scss';


const AccordionPdf = ({file_data}) => {


  return (
    <div>
      <Accordion className={styles.file_pdf}>
        <Accordion.Item  >
          <Accordion.Header  >{file_data.name}</Accordion.Header>
          <Accordion.Body>
            <iframe src={file_data.file}/>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>

  )
};



export default AccordionPdf;
