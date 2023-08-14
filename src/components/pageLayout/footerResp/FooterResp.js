import React from 'react';
import rightColors from "../../../assets/img.header/rightColors.png";
import leftColors from "../../../assets/img.header/leftColors .png";
import './FooterResp.css';

function FooterResp() {
    return (

        <div className="footer-color">
            <figure><img src={rightColors} alt="right-colors" className="right"/></figure>
            <figure><img src={leftColors} alt="left-colors" className="left"/></figure>
        </div>
    );
}

export default FooterResp;
