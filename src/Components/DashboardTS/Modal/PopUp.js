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

            {(item.name === "od" ||
              item.name === "old" ||
              item.name === "towo" ||
              item.name === "tcwo" ||
              item.name === "active" ||
              item.name === "ack" ||
              item.name === "close" ||
              item.name === "opmwo" ||
              item.name === "cpmwo" )&&
               <h3>Location: {item.location}</h3>}
            
            
            {(item.name === "od" ||
              item.name === "old" ||
              item.name === "towo" ||
              item.name === "tcwo" ||
              item.name === "active" ||
              item.name === "ack" ||
              item.name === "close" ||
              item.name === "opmwo" ||
              item.name === "cpmwo") && <h4>Time: {item.time}</h4>}
           
           
            {(item.name === "towo" ||
              item.name === "tcwo") && 
                <h4>Pannel Details: {item.pannel_details}</h4>
              }

            {(item.name === "opmwo" ||
              item.name === "cpmwo" )&& 
                <h4>Asset Details: {item.asset_details}</h4>
              }

            {item.name === "active" && <h4>Active Time: {item.active_time}</h4>}
            
            {item.name === "ack" && 
              <h4>Acknowledged Time: {item.acknowledged_time}</h4>
            }
            {item.name === "close" && <h4>Close Time: {item.close_time}</h4>}
            
              <h4>
                CCTV Link: <a href={`http://${item.cctv_link}`}>{item.cctv_link}</a>
              </h4>
            
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
