import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={footerContentStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} COLEGIO LIPENUMI. All rights reserved.
        </p>
        <div style={socialIconsStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined style={iconStyle} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={iconStyle} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Estilos del footer
const footerStyle = {
  backgroundColor: "#295EA5",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  position: "relative",
  bottom: "0",
  width: "100%",
};

const footerContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerTextStyle = {
  marginBottom: "10px",
};

const socialIconsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const iconStyle = {
  fontSize: "24px",
  color: "#fff",
};

export default Footer;
