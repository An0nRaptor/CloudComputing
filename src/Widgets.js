import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {


  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("Bitcoin reclaims $40,000 as crypto volatility lingers. " ,'Top')}
      {newArticle("WhatsApp sues government over new IT rules." ,"Top")}
      {newArticle("10 lakh defeated Covid-19 Vid till Date; 3k +ve." ,"2021")}
      {newArticle("No guidelines yet from state govt to resume vax for 18+." ,"Health")}
      {newArticle("Petrol price in Mumbai all set to touch Rs 100." ,"Resources")}
    </div>
  );
}

export default Widgets;
