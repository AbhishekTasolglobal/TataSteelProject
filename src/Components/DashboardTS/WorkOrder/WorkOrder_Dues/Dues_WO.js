import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Button,
} from "reactstrap";
import PopUp from "../../Modal/PopUp";

const dragItems = [
  {
    id: "1",
    title: "Total Overdue",
    quant: "3",
    location: "2nd Building",
    time: "1:00pm",
    link: <u>more..</u>,
    asset_details: "active",
    icon: "../icons/overdue.png",
    name: "opmwo",
  },
  {
    id: "2",
    title: "Due Today",
    quant: "1",
    location: "2nd Building",
    time: "1:00pm",
    link: <u>more..</u>,
    asset_details: "active",
    icon: "../icons/due-date.png",
    name: "cpmwo",
  },
];

const Dues_WO = () => {
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
          <h3>Dues</h3>
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
          <Col className="draggable" xl="6" md="12" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
              style={{ height: "15rem" }}
            >
              <CardHeader>
                <CardTitle tag="h4">{item.title}</CardTitle>
              </CardHeader>

              <CardBody>
                <br />
                <CardText style={{ color: "#ff5733" }}>{item.quant}</CardText>
                <div className="flex">
                  <div className="text">
                      <br />
                      <Button.Ripple
                        color="flat-primary"
                        onClick={() => getData(item)}
                        style={{ marginLeft: "-25%" }}
                      >
                        {item.link}
                      </Button.Ripple>
                      <PopUp item={data} modal={modal} setModal={setModal} />
                     <br />
                  </div>
                  <div className="image" style={{marginTop:'6%'}}>
                    <img src={item.icon} style={{ width: "30%" }} />
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

export default Dues_WO;
