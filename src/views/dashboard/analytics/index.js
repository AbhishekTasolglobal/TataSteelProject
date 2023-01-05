// ** React Imports
import { useContext, useState } from "react";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

import WorkOrder from "../../../Components/DashboardTS/WorkOrder/WorkOrder";
import PMWorkOrder from "../../../Components/DashboardTS/Preventive_Maintenance_WorkOrder/PMWorkOrder";
import Alarm from "../../../Components/DashboardTS/Alarm/Alarm";
import PanelStatus from "../../../Components/DashboardTS/Panel_Status/PanelStatus";
import MTTA from "../../../Components/DashboardTS/Category/MTTA";
import MTTR from "../../../Components/DashboardTS/Category/MTTR";
import DueOrders from "../../../Components/DashboardTS/Preventive_Maintenance_WorkOrder/DueOrders";
import NewWorkOrder from "../../../Components/DashboardTS/Category/NewWorkOrder";
import Dues_WO from "../../../Components/DashboardTS/WorkOrder/WorkOrder_Dues/Dues_WO";

const AnalyticsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);

  return (
    <div id="dashboard-analytics">
      <Row className="match-height">
        <Col>
          <PanelStatus />
        </Col>
        <Col>
          <Alarm />
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <WorkOrder />
        </Col>
        <Col>
          <Dues_WO />
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <PMWorkOrder />
        </Col>
        <Col>
          <DueOrders />
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <MTTA />
        </Col>
        <Col>
          <MTTR />
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <NewWorkOrder />
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsDashboard;
