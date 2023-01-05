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
import OWOChart from "./Chart/OWOChart";

const dragItems = [
  {
    id: "1",
    title: "Open / Closed ",
    quant1: "2",
    quant2: "3",    
    location: "2nd Building",
    time: "1:00pm",
    link: <u>more..</u>,
    pannel_details: "active",
    name: "towo",
    chart: <OWOChart />,
  },
  
];

const WorkOrder = () => {
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
          <h3>BreakDown Work Order</h3>
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
      <ReactSortable
        className="row sortable-row"
        list={cardsArr}
        setList={setCardsArr}
      >
        {cardsArr.map((item) => (
          <Col className="draggable" xl="12" md="12" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
              style={{ height: "15rem" }}
              
            >
              <div className="flex">
                <div>
                  <CardHeader>
                    <CardTitle tag="h1" >
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      {item.quant1} / {item.quant2}
                    </CardText>
                    <br/>
                    <br/>
                    <>
                      <Button.Ripple
                        color="flat-primary"
                        onClick={() => getData(item)}
                        style={{ marginLeft: "-12%" }}
                      >
                        {item.link}
                      </Button.Ripple>
                      <PopUp item={data} modal={modal} setModal={setModal} />
                    </>
                  </CardBody>
                </div>
                <div>{item.chart}</div>
              </div>
            </Card>
          </Col>
        ))}
      </ReactSortable>
    </>
  );
};

export default WorkOrder;
