import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

import { ReactSortable } from "react-sortablejs";

const dragItems = [
  {
    id: "1",
    title: "Fire Panel",
    link: "View details..",
    time: `${2.5} hrs`,
    name: "fp",
    icon: "../Icons/fire-button.png",
  },
  {
    id: "2",
    title: "Extinguishers",
    link: "View details...",
    time: `${3.2} days`,
    name: "ext",
    icon: "../Icons/fire-extinguisher.png",
  },
  {
    id: "3",
    title: "Smoke Detectors",
    link: "View details...",
    location: "1st floor",
    time: `${2.12} hrs`,
    name: "smoke",
    icon: "../Icons/smoke-Detector.png",
  },
];

const MTTA = () => {
  const [cardsArr, setCardsArr] = useState(dragItems);
  const [active, setActive] = useState("24-Hours");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getData = (item) => {
    setData(item);
    setModal(!modal);
  };
  return (
    <>
      <CardHeader className="d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
        <CardTitle tag="h4">
          <h3>MTTA (Mean Time to Acknowledge)</h3>
        </CardTitle>
        {/* <CardTitle style={{ "padding-left": "72em" }}>Sort By:</CardTitle> */}
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle color="flat-primary" caret>
            {active}
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem
              active={active === "24-Hours"}
              color="flat-primary"
              outline
              onClick={() => setActive("24-Hours")}
            >
              24 Hours
            </DropdownItem>
            <DropdownItem
              active={active === "Weekly"}
              color="flat-primary"
              outline
              onClick={() => setActive("Weekly")}
            >
              Weekly
            </DropdownItem>
            <DropdownItem
              active={active === "Monthly"}
              color="flat-primary"
              outline
              onClick={() => setActive("Monthly")}
            >
              Monthly
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </CardHeader>
      <ReactSortable
        className="row sortable-row"
        list={cardsArr}
        setList={setCardsArr}
      >
        {cardsArr.map((item) => (
          <Col className="draggable" xl="4" md="12" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
              style={{ height: "13rem" }}
            >
              <CardHeader>
                <CardTitle tag="h4" >
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardBody>
                {item.name === "smoke" ? "" : <br />}
                    <CardText style={{fontSize:'30px'}}>
                      {item.time}
                    </CardText>
                  <br />                  
                  <div className="text">
                    <img src={item.icon} style={{ width: "20%" }} />
                  </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </ReactSortable>
    </>
  );
};

export default MTTA;
