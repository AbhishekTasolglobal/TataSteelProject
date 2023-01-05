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

const dragItems = [
  {
    id: "1",
    title: "Online Detectors",
    quant: "80",
    link: "more..",
    location: "1st building",
    time: "12:00pm",
    icon:'../icons/motion-detector.png',
    name: "od",
  },
  {
    id: "2",
    title: "Off-Line Detectors",
    quant: "40",
    link: "more..",
    location: "2nd Building",
    time: "1:00pm",
    icon:'../icons/wifi.png',
    name: "old",
  },
  {
    id: "3",
    title: "Reliability",
    quant: "72%",
    link: "more..",
    location: "2nd Building",
    time: "1:00pm",
    icon:'../icons/shield.png',
    name: "rel",
  },
];

const PanelStatus = () => {
  const [cardsArr, setCardsArr] = useState(dragItems);
  const [active, setActive] = useState("24-Hours");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getData = (item) => {
    // console.log(item)
    setData(item);
    setModal(!modal);
  };

  return (
    <>
      <CardHeader className="d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
        <CardTitle tag="h4">
          <h3>Panel Status</h3>
        </CardTitle>
        {/* <CardTitle style={{ "padding-left": "65em" }}>Sort By:</CardTitle> */}
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
        {cardsArr.map((item, i) => (
          <Col className="draggable" xl="4" md="12" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
              style={{ height: "13rem" }}
              
            >
              <CardHeader>
                <CardTitle tag="h4">
                  <h3>{item.title}</h3>
                </CardTitle>
              </CardHeader>
              
               <CardBody>
               {item.name==='rel'?<br/>:''}
                {item.name === "old" ? (
                  <CardText
                    style={{ color: "#ff5733"}}
                  >
                    {item.quant}
                  </CardText>
                ) : (
                  <CardText >
                    {item.quant}
                  </CardText>
                )}
              <div className="flex">
                <div className="text">  
                
                  <Button.Ripple
                    color="flat-primary"
                    id="controlledPopover"
                    onClick={() => getData(item)}
                    style={{ marginLeft: "-25%" }}
                  >
                    {item.link}
                  </Button.Ripple>
                  <PopUp item={data} modal={modal} setModal={setModal} />
              
                </div>
                <div  className="image">
                    <img src={item.icon} style={{ width: "40%" }} />
                  </div>
                </div>
              </CardBody>
              
            </Card>
          </Col>
        ))}
      </ReactSortable>
    </>
  );
};

export default PanelStatus;
