import React from "react";
import {
  FacebookOutlined,
  XOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={footerContentStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} COLEGIO LIPENUMI. All rights
          reserved.
        </p>
        <div style={socialIconsStyle}>
          <a
            href="https://www.facebook.com/liceopedagogico.nuevomilenio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined style={iconStyle} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <XOutlined style={iconStyle} />
          </a>
          <a
            href="https://www.instagram.com/lipenumi/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={iconStyle} />
          </a>
          <a
            href="https://wa.me/573003929873"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined style={iconStyle} />
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
