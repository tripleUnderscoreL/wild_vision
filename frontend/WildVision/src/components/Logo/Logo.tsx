import React from "react";
import './Logo.scss';
interface Props {}

const Logo = (props: Props) => {
  return(
    <a href="/" className="wv">
      <p className="wv">WildVision</p>
    </a>
  )
}

export default Logo;