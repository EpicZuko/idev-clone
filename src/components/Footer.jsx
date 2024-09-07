import { useSelector } from "react-redux";
/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "@emotion/styled";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import phone from "../assets/img/Vector (5).svg";
import message from "../assets/img/Vector (6).svg";
import location from "../assets/img/Vector (7).svg";
import whatsapp from "../assets/img/Vector (8).svg";
import instagram from "../assets/img/Group 91.svg";
import telegram from "../assets/img/Vector (9).svg";
import button from "../assets/img/Vector (10).svg";
import footerBackround from "../assets/img/bacfooter.svg";
import instagramFooter from "../assets/img/Group 46.svg";
import whatsappFooter from "../assets/img/Group 47.svg";
import telelgramFooter from "../assets/img/Group 48.svg";
import idevIcons from "../assets/img/idev.svg";

const ContactsPage = () => {
  const language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const [close, setClose] = useState(false);
  return (
    <FooterStyled id="contacts">
      <TextH1>{language === "KG" ? "Байланыштар" : "Контакты"}</TextH1>
      <Footer backgroundfooter={footerBackround}>
        <DIV>
          <div>
            <ul>
              <LIST>
                <img src={phone} alt="phone" />
                +996 509 91 41 01{" "}
              </LIST>
              <LIST>
                <img src={message} alt="message" /> idevitmentoring@gmail.com
              </LIST>
              <LIST>
                <img src={location} alt="location" /> Ахунбаева 67/1 (Нижний
                джал)
              </LIST>
            </ul>
            <DIVIMAGE>
              <a href="https://api.whatsapp.com/send?phone=996509914101">
                <img src={whatsapp} alt="" />
              </a>
              <a href="https://www.instagram.com/idev.kg/">
                <img src={instagram} alt="" />
              </a>
              <a href="https://web.telegram.org/a/#846785266">
                <img src={telegram} alt="" />
              </a>
            </DIVIMAGE>
          </div>
          <div>
            <Button onClick={() => setClose(true)}>
              <img src={button} alt="" />
              {language === "KG" ? "Картаны ачуу" : "Открыть карту"}
            </Button>
          </div>
        </DIV>
      </Footer>
      <DivContainerFooter>
        <DIVFOOTER>
          <div>
            <img src={idevIcons} alt="idev" />
          </div>
          <ULLIST>
            <li> {language === "KG" ? "Үй" : "Главная"}</li>
            <li> {language === "KG" ? "Биз жөнүндө" : "О нас"}</li>
            <li> {language === "KG" ? "Курстар" : "Курсы"}</li>
          </ULLIST>
          <DIVFOOTERImg>
            <a href="https://www.instagram.com/idev.kg/">
              <img src={instagramFooter} alt="instagram" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=996509914101">
              <img src={whatsappFooter} alt="whatsapp" />
            </a>
            <a href="https://web.telegram.org/a/#846785266">
              <img src={telelgramFooter} alt="telegram" />
            </a>
          </DIVFOOTERImg>
        </DIVFOOTER>
        <TextDiv>
          <Text>@All rights reserved</Text>
        </TextDiv>
      </DivContainerFooter>
      {close && (
        <div>
          <Helmet>
            <title>IDEV {t("")}</title>
            <meta name="description" content="stars" />
          </Helmet>
          <Backdrop>
            <WrapperMap data-aos="fade-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.17936193445416!2d74.56378722500612!3d42.843143862330734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec90e63a31f0b%3A0x2c39ccd5876634d3!2z0KPQu9GR0YLQvdGL0LUg0KbQtdC90Ys!5e1!3m2!1sru!2skg!4v1724748642864!5m2!1sru!2skg&zoomControl=false"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <CloseButton onClick={() => setClose(false)}>X</CloseButton>
            </WrapperMap>
          </Backdrop>
        </div>
      )}
    </FooterStyled>
  );
};

export default ContactsPage;
const FooterStyled = styled.footer`
  background: #f8f4f1;
`;
const TextH1 = styled("h1")`
  text-align: center;
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  padding: 70px 0 70px 0;

  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: center;
    color: #1e1e2f;
  }
`;
const Footer = styled("footer")`
  background-image: url(${(props) => props.backgroundfooter});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`;
const DIV = styled("div")`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 80px 0 30px 100px;
  gap: 38%;
  @media (max-width: 470px) {
    padding: 50px 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 53px;
  }
`;
const LIST = styled("li")`
  font-family: Jost;
  font-size: 21.68px;
  font-weight: 400;
  line-height: 25.37px;
  text-align: left;
  color: #f8f4f1;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 0 31px 0;
  list-style: none;
`;
const DIVIMAGE = styled("div")`
  display: flex;
  gap: 45px;
  margin: 71px 0 0 0;
  @media (max-width: 470px) {
    display: none;
  }
`;
const Backdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 910;
`;
const Button = styled("button")`
  width: 254px;
  height: 55px;
  padding: 14px 45px 14px 45px;
  margin-top: -30px;
  border-radius: 55px;
  font-family: Jost;
  font-size: 21px;
  font-weight: 400;
  line-height: 24.57px;
  text-align: center;
  display: flex;
  gap: 10px;
  border: none;
  cursor: pointer;
`;

const WrapperMap = styled("div")`
  position: relative;
  width: 80%;
  height: 500px;
  margin: 100px auto;
  background: white;
  border: 1px solid orange;
  z-index: 20;

  & > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  & .place-card .place-card-large {
    background-color: red !important;
    padding: 10px;
  }
`;

const CloseButton = styled("button")`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 30;
`;
const DivContainerFooter = styled("div")`
  background: #262626;
`;
const TextDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`;
const DIVFOOTER = styled("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`;
const ULLIST = styled("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 0;
  }
`;
const DIVFOOTERImg = styled("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 0;
  }
`;
