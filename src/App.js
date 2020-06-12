import React from "react";
import "./styles.css";
import InfoItem from "./components/infoitem.js";
import ToolBar from "./components/toolbar.js";


export default function App() {
  return (
    <div className="App">
      <ToolBar title="ISILON Capacity Report" />
      <div className="flex-container">
      <div className="flex-child">
      <InfoItem title="One "/>
      <InfoItem title="Two "/>
      <InfoItem title="Three "/>
      <InfoItem title="Four "/>
      </div>
      <div className="flex-child">
      <object type="application/javascript" data="https://xx3gp.csb.app/" width="800px" height="600px">
    </object>
        </div>
      </div>
    </div>
  );
}
