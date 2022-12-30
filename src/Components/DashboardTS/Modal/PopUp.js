import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PopUp = ({ item, modal, setModal }) => {
    console.log(item)
  return (
    <div className="demo-inline-spacing">
      <div className="vertically-centered-modal">
        <Modal
          isOpen={modal}
          toggle={() => setModal(!modal)}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={() => setModal(!modal)}>
            {item.title}
          </ModalHeader>
          <ModalBody>
           {item.name==='OBD' || item.name==='CBD' && {Location: <h3>{item.position}</h3>}}
            Time: <h4> {item.time}</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setModal(!modal)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default PopUp;
