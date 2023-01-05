import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
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
import PopUp from "../Modal/PopUp";

import "./Alarm.css";
const dragItems = [
  {
    id: "1",
    title: "Active",
    quant: "2",
    link: <u>more..</u>,
    location: "1st floor",
    active_time: "12:00pm",
    cctv_link: "www.google.com",
    name: "active",
    icon: "../icons/warning.png",
  },
  {
    id: "2",
    title: "Acknowledged",
    quant: "1",
    link: <u>more..</u>,
    location: "1st floor",
    acknowledged_time: "12:00pm",
    cctv_link: "www.google.com",
    icon: "../icons/customer.png",
    name: "ack",
  },
  {
    id: "3",
    title: "Closed",
    quant: "2",
    link: <u>more..</u>,
    location: "1st floor",
    close_time: "12:00pm",
    cctv_link: "www.google.com",
    icon: "../icons/resolved.png",
    name: "close",
  },
];

const Alarm = () => {
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
          <h3>Alarm</h3>
        </CardTitle>
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

      <div className="row sortable-row" list={cardsArr} setList={setCardsArr}>
        {cardsArr.map((item) => (
          <Col className="draggable" xl="4" md="12" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
              style={{ height: "13rem" }}
            >
              <CardHeader>
                <CardTitle tag="h4">{item.title}</CardTitle>
              </CardHeader>
              <CardBody>
                <br />
                {item.name === "active" ? (
                  <CardText style={{ color: "#ff5733" }}>{item.quant}</CardText>
                ) : (
                  <CardText>{item.quant}</CardText>
                )}
                <div className="flex">
                  <div className="text">
                    <>
                      <Button.Ripple
                        color="flat-primary"
                        onClick={() => getData(item)}
                        style={{ marginLeft: "-25%" }}
                      >
                        {item.link}
                      </Button.Ripple>
                      <PopUp item={data} modal={modal} setModal={setModal} />
                    </>
                  </div>
                  <div className="image">
                    <img src={item.icon}  style={{width:'40%'}}/>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Alarm;
