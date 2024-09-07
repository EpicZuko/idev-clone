import React from "react";
import whatsapp from "../assets/img/whatsappIcon.4a33b058.svg";
import styled, { keyframes } from "styled-components";

const Contacts = () => {
  return (
    <WhatsappWrapper>
      <a href="https://api.whatsapp.com/send?phone=996509914101">
        <img src={whatsapp} alt="WhatsApp Icon" />
      </a>
    </WhatsappWrapper>
  );
};

export default Contacts;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 230, 118, 0.9);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  }
`;

const WhatsappWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 0px;
  width: 79px;
  height: 79px;
  background: #00e676;
  margin-bottom: 16px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 3s linear infinite;
  box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  z-index: 900;
`;
