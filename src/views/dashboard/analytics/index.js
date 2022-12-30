// ** React Imports
import { useContext, useState } from "react";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Reactstrap Imports
import {
  Row,
  Col,
} from "reactstrap";

import WorkOrder from "../../../Components/DashboardTS/WorkOrder/WorkOrder";
import PMWorkOrder from "../../../Components/DashboardTS/Preventive_Maintenance_WorkOrder/PMWorkOrder";
import Alarm from "../../../Components/DashboardTS/Alarm/Alarm";
import PanelStatus from "../../../Components/DashboardTS/Panel_Status/PanelStatus";

const AnalyticsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);
 

  return (
    <div id="dashboard-analytics">
      <Row className="match-height">
        <Col>
          <PanelStatus/>
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <WorkOrder/>
        </Col>
      </Row>
      <Row className="match-height">
        <Col >
          <PMWorkOrder/>
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
        <Alarm/>
        </Col>
      </Row>
      
    </div>
  );
};

export default AnalyticsDashboard;
