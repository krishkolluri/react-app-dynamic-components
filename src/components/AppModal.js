import React,{useState} from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import Article from '../components/Articles';




function AppModal() {
  
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      
      <Button onClick={() => setLgShow(true)}>Get HSX Details</Button>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            HSX code Details.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Article/></Modal.Body>
      </Modal>
    </>
  );
}


export default AppModal;
