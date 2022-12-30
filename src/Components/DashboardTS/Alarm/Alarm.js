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
    title: "Active",
    quant: "2",
    link: "View details..",
    location:'1st floor',
    active_time:'12:00pm', 
    CCTV:''
  },
  {
    id: "2",
    title: "Acknowledged",
    quant: "1",
    link: "View details...",
    location:'1st floor',
    acknowledged_time:'12:00pm', 
    CCTV:''
  },
  {
    id: "3",
    title: "Close",
    quant: "2",
    link: "View details...",
    location:'1st floor',
    close_time:'12:00pm', 
    CCTV:''
  },
];

const Alarm = () => {
  const [cardsArr, setCardsArr] = useState(dragItems);
  const [active, setActive] = useState("24-Hours");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data,setData]=useState('')
  const [modal,setModal]=useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  };

  const getData=(item)=>{
  setData(item)
  setModal(!modal)
  }
  return (
    <>
      <CardHeader className="d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
        <CardTitle tag="h4">
          <h3>Alarm</h3>
        </CardTitle>
        <CardTitle style={{ "padding-left": "46em" }}>Sort By:</CardTitle>
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
          <Col className="draggable" xl="4" md="6" sm="12" key={item.id}>
            <Card
              className={`draggable-cards ${item.id !== 4 ? "me-1" : null}`}
            >
              <CardHeader>
                <CardTitle tag="h4">{item.title}</CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>{item.quant}</CardText>
                <CardText>
                  <Button.Ripple color="flat-primary"  onClick={()=>getData(item)}>
                    {item.link}
                  </Button.Ripple>
                  <PopUp item={data} modal={modal} setModal={setModal}/>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </ReactSortable>
    </>
  );
};

export default Alarm;
