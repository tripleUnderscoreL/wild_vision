import React from "react";
import './Footer.scss';
interface Props {}

const Footer = (props: Props) => {
  return(
    <div className="footer">
      <h1>WildVision</h1>
      <section>
        <p>+7(...) ... .. ..</p>
        <p>WildVisionCo@gmail.com</p>
      </section>
    </div>
  )
}

export default Footer;