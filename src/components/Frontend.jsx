import React from "react";
import styled from "styled-components";
import next from "../assets/img/Vector (11).svg";
import frontBack from "../assets/img/frontend.svg";
import AccordionTransition from "./Accordion";
import mentors from "../assets/img/mentors.svg";
import img from "../assets/img/HTML ICON.svg";
import jsicon from "../assets/img/JS ICON.svg";
import reacticon from "../assets/img/Vector (12).svg";
import reduxicon from "../assets/img/redux-logo-svgrepo-com 1.svg";
import reduxtoolkitIcon from "../assets/img/redux-logo-svgrepo-com 2.svg";
import materialicon from "../assets/img/material-ui-svgrepo-com 1.svg";
import femedal from "../assets/img/feMedal0 (1).svg";
import js from "../assets/img/Vector (13).svg";
import framework from "../assets/img/Vector (14).svg";
import git from "../assets/img/Vector (15).svg";
import command from "../assets/img/Group 80 (1).svg";
import instagramFooter from "../assets/img/Group 46.svg";
import whatsappFooter from "../assets/img/Group 47.svg";
import telelgramFooter from "../assets/img/Group 48.svg";
import idevIcons from "../assets/img/idev.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const frontendArrow = [
  {
    id: 1,
    img: img,
    title: "1.HTML-CSS",
    description: "Description for HTML-CSS.",
  },
  {
    id: 2,
    img: jsicon,
    title: "2.JAVASCRIPT",
    description: "Description for JavaScript.",
  },
  {
    id: 3,
    img: reacticon,
    title: "3.REACT JS",
    description: "Description for React JS.",
  },
  {
    id: 4,
    img: reduxicon,
    title: "4.REDUX",
    description: "Description for Redux.",
  },
  {
    id: 5,
    img: reduxtoolkitIcon,
    title: "5.REDUX-TOOLKIT",
    description: "Description for Redux Toolkit.",
  },
  {
    id: 6,
    img: materialicon,
    title: "6.MATERIAL-UI",
    description: "Description for Material-UI.",
  },
];

const Frontend = () => {
  const language = useSelector((state) => state.language.language);
  const navigate = useNavigate();
  return (
    <FrontendContainerStyled>
      <FrontendStyled backgrounfrontend={frontBack}>
        <button onClick={() => navigate("/")}>
          <NextStyled src={next} alt="" />
        </button>
        <FrontendH1>FRONT-END DEVELOPER</FrontendH1>
        <FrontendP>
          {language === "KG"
            ? "Сиз макеттин жана JAVASCRIPTтин негиздери менен баштайсыз жана тренингдин аягында үйрөнөсүз корпоративдик кызматтарды жасоо. Командада иштөө тажрыйбасына ээ болуп, баштаңыз IT тармагында веб-иштеп чыгуучу катары карьера"
            : " Вы начнете с основ верстки и JAVASCRIPT, а к концу обучения научитесь  делать корпоративные сервисы. Получите опыт работы в команде и начнете карьеру в сфере IT как веб-разработчика"}
        </FrontendP>
        <UlList>
          <li>
            {language === "KG"
              ? "Курсту аяктагандан кийин сизге сертификат жана кошумча жумуш берилет IT компаниялары"
              : " После окончания курса получите сертификат и плюс трудоустройство в IT-компаниях"}
          </li>
        </UlList>
      </FrontendStyled>
      <FrontendAccordionStyled>
        <div>
          <div>
            <FrontendH1Text>Программа</FrontendH1Text>
            <FrontendPText>
              {language === "KG" ? "Негизги курстар" : "Основные курсы"}
            </FrontendPText>
          </div>
          <AccordionTransition arrow={frontendArrow} />
        </div>
        <FrontendSignup>
          <FrontendSignupH2>Курс</FrontendSignupH2>
          <FrontendSignupH3>JAVA DEVELOPER</FrontendSignupH3>
          <FrontendSignupP>
            {language === "KG"
              ? "Курс 8 айга созулат - 6 ай окуу, 2 ай стажировка"
              : "Курс длится 8 месяцев - 6 месяц обучение 2 месяц стажировка"}
          </FrontendSignupP>
          <FrontendSignupH4>
            {language === "KG" ? "Айына 10 000 сом" : "10 000 cом в месяц"}
          </FrontendSignupH4>
          <FrontendSignupA href="https://api.whatsapp.com/send?phone=996509914101">
            {language === "KG" ? "Кирүү" : "Записаться"}
          </FrontendSignupA>
        </FrontendSignup>
      </FrontendAccordionStyled>
      <div>
        <DiplomaprojectsH1>
          {language === "KG" ? "Дипломдук долбоорлор" : "Дипломные проекты"}
        </DiplomaprojectsH1>
        <DiplomaprojectsList>
          <li>1.Landing Page </li>
          <li>2.{language === "KG" ? "Вебсайт" : "Сайт"}</li>
          <li>
            3.{language === "KG" ? "Интернет дүкөнү" : "Интернет магазин"}
          </li>
          <li>
            4.
            {language === "KG"
              ? "Эмне кылабыз жана кантип иштейбиз?"
              : "С чем мы будем и как будем работать"}
          </li>
        </DiplomaprojectsList>
      </div>
      <div>
        <MentorsFrontend>
          {language === "KG"
            ? "Насаатчылар тарабынан"
            : "Менторы по Front-End "}
        </MentorsFrontend>
        <MentorsContainerStyled>
          <MentorsImg>
            <img src={mentors} alt="mentors" />
            <SlideH1>Баланчаев Тукунчо</SlideH1>
            <SlideP>UX/UI Designer</SlideP>
          </MentorsImg>
          <MentorsImg>
            <img src={mentors} alt="mentors" />
            <SlideH1>Баланчаев Тукунчо</SlideH1>
            <SlideP>UX/UI Designer</SlideP>
          </MentorsImg>
        </MentorsContainerStyled>
      </div>
      <div>
        <WillYouLearnH1>
          {language === "KG" ? "Сиз эмнени үйрөнөсүз?" : "Чему вы научитесь?"}
        </WillYouLearnH1>
        <WillYouContainerStyled>
          <WillYouImg>
            <img src={femedal} alt="femedal" />
          </WillYouImg>
          <div>
            <WillYouH1>
              {language === "KG" ? "Вебсайтты жайгаштырыңыз" : "Верстать сайт "}
            </WillYouH1>
            <WillYouText>
              {language === "KG"
                ? "Заманбап CSSтин бардык өзгөчөлүктөрүн майда-чүйдөсүнө чейин үйрөнүңүз, үйрөнүңүз колдонууга оңой жооп берүүчү веб-сайттарды түзүңүз. Сен жасайсыңбы? долбоорлор анимациялардын жана өтүүлөрдүн жардамы менен эстетикалык жактан жагымдуураак."
                : "Детально изучите все возможности современного CSS, научитесь верстать адаптивныесайты, которыми удобно пользоваться. Сделаете проекты эстетичнее при помощианимаций и переходов."}
            </WillYouText>
          </div>
        </WillYouContainerStyled>
        <StrelkaSpan />
        <WillYouContainerStyled>
          <WillYouImg>
            <img src={js} alt="femedal" />
          </WillYouImg>
          <div>
            <WillYouH1>Java Script</WillYouH1>
            <WillYouText>
              {language === "KG"
                ? "Сиз сайттын логикасын иштеп чыгасыз. Жөнөкөй модалдык терезеден серверден маалыматтарды асинхрондук жүктөө жана программалоо үчүн эң популярдуу программалоо тилдеринин бирин стресссиз үйрөнүңүз."
                : "Будете проектировать логику работы сайта. От простого модального окнадо асинхронной загрузки данных с сервера и программирования enterprise- приложений.Без стресса выучите один из самых популярных языков программирования."}
            </WillYouText>
          </div>
        </WillYouContainerStyled>
        <StrelkaSpan />
        <WillYouContainerStyled>
          <WillYouImg>
            <img src={framework} alt="femedal" />
          </WillYouImg>
          <div>
            <WillYouH1>Framework</WillYouH1>
            <WillYouText>
              {language === "KG"
                ? "Алкактардын жардамы менен комплексти тез өнүктүрө аласыз желе кызматтары, ошондой эле алар браузердин ресурстарын натыйжалуураак колдонушат. сен Сиз эмнени үйрөнүүнү тандайсыз - React же Vue.."
                : "С помощью фреймворков вы сможете быстрее разрабатывать сложные веб-сервисы, а ещё они эффективнее расходуют ресурсы браузера. Вы  сами выбираете, что учить — React или Vue.."}
            </WillYouText>
          </div>
        </WillYouContainerStyled>
        <StrelkaSpan />
        <WillYouContainerStyled>
          <WillYouImg>
            <img src={git} alt="femedal" />
          </WillYouImg>
          <div>
            <WillYouH1>
              {language === "KG" ? "GIT менен иштөө" : "Работать с GIT"}
            </WillYouH1>
            <WillYouText>
              {language === "KG"
                ? "Сиз долбоорлордогу иштин бардык этаптарын сактап каласыз, ошондо кесиптештериңиз ар дайым кодго кире алышат жана кокусунан кеткен каталарды эки чыкылдатуу менен оңдоого болот."
                : "Будете сохранять все этапы работы над проектами, чтобы у коллег всегда был доступ к коду, а случайные ошибки можно было исправить в два клика"}
            </WillYouText>
          </div>
        </WillYouContainerStyled>
        <StrelkaSpan />
        <WillYouContainerStyled>
          <WillYouImg>
            <img src={command} alt="femedal" />
          </WillYouImg>
          <div>
            <WillYouH1>
              {language === "KG" ? "Сулуулук командада" : "Красота в команде "}
            </WillYouH1>
            <WillYouText>
              {language === "KG"
                ? "Спринттерди жана Scrum методологиясын колдонуу менен иштөөнү үйрөнүңүз. Under команданын жетекчилиги тарабынан, башка студенттер менен бирге, сиз жазасыз веб колдонмо."
                : "Научитесь работать по спринтам и Scrum-методологии. Под руководством тимлидавместе с другими студентами напишете веб-приложение."}
            </WillYouText>
          </div>
        </WillYouContainerStyled>
      </div>
      <DivContainerFooter>
        <DIVFOOTER>
          <div>
            <ImgFooter src={idevIcons} alt="idev" />
          </div>
          <ULLIST>
            <li>{language === "KG" ? "Үй" : "Главная"}</li>
            <li>{language === "KG" ? "Биз жөнүндө" : "О нас"}</li>
            <li>{language === "KG" ? "Курстар" : "Курсы"}</li>
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
    </FrontendContainerStyled>
  );
};

export default Frontend;
const FrontendContainerStyled = styled.div`
  background: #f8f4f1;
  height: auto;
`;
const FrontendStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0 0 80px;
  background-image: url(${(props) => props.backgrounfrontend});
  background-size: cover;
  background-position: center;
  color: #ffff;
  @media (max-width: 470px) {
    width: 100%;
    padding: 65px 0 0 8px;
  }
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const NextStyled = styled.img`
  display: flex;
  margin-bottom: 112px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.7);
  }
  @media (max-width: 470px) {
    padding: 0 0 0 29px;
  }
`;
const FrontendH1 = styled.h1`
  font-family: Montserrat;
  font-size: 65px;
  font-weight: 800;
  line-height: 76.05px;
  text-align: left;
  padding: 0 0 15px 150px;
  color: #ffffff;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 32.76px;
    text-align: left;
    padding: 0 0 10px 29px;
  }
`;
const FrontendP = styled.p`
  width: 968px;
  /* height: 69px; */
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 15px 150px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.06px;
    text-align: left;
    padding: 0 0 10px 29px;
    width: 369px;
    /* height: 126px; */
  }
`;
const UlList = styled.ul`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  width: 1010px;
  height: 46px;
  padding: 28px 0 0 248px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 19.89px;
    text-align: left;
    padding: 0 0 0 29px;
    width: 335px;
    /* height: 60px; */
  }
`;

const FrontendH1Text = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 76px 0 33px 77px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 20px 0 10px 15px;
  }
`;
const FrontendPText = styled.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.1px;
  text-align: left;
  padding: 0 0 0 77px;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 23.4px;
    padding: 0 0 0 15px;
  }
`;
const FrontendAccordionStyled = styled.div`
  display: flex;
  gap: 141px;
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const FrontendSignup = styled.div`
  width: 332.34px;
  height: 310px;
  border-radius: 0 0 100px 0;
  box-shadow: 0px 1px 6px 0px #4b4b4b40;
  background: linear-gradient(339.84deg, #5e59ee 25.67%, #eb89f5 108.05%);
  margin: 76px 0 0 0;
  @media (max-width: 470px) {
    margin: 20px auto;
  }
`;
const FrontendSignupH2 = styled.h2`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.06px;
  text-align: left;
  padding: 39px 0 17px 40px;
  color: #ffffff;
`;
const FrontendSignupH3 = styled.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 17px 40px;
  color: #ffffff;
`;
const FrontendSignupP = styled.p`
  font-family: Jost;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  width: 180px;
  /* height: 60px; */
  color: #ffffff;
  padding: 0 0 17px 40px;
`;
const FrontendSignupH4 = styled.h4`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  color: #ffffff;
  padding: 0 0 30px 40px;
`;
const FrontendSignupA = styled.a`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  text-decoration: none;
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  margin: 0px 0 0px 40px;

  cursor: pointer;
`;
const DiplomaprojectsH1 = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    padding: 0 0 0 20px;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`;
const DiplomaprojectsList = styled.ul`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  list-style-type: none;
  text-align: left;
  padding: 0 0 35px 80px;
  & li {
    padding: 0 0 20px 0px;
  }
  @media (max-width: 470px) {
    padding: 20px 0 35px 15px;

    & li {
      padding: 10px 0 0 9px;
    }
  }
`;
const MentorsFrontend = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
    padding: 0 0 20px 20px;
  }
`;
const MentorsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding: 0 0 0 80px;
  @media (max-width: 470px) {
    padding: 0 0px 0 20px;
    gap: 10px;
  }
`;
const MentorsImg = styled.div`
  position: relative;
  @media (max-width: 470px) {
    & img {
      width: 325.95px;
      height: 349px;
    }
  }
`;
const SlideH1 = styled.h1`
  position: absolute;
  top: 347px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 240px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`;
const SlideP = styled.p`
  position: absolute;
  top: 380px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 270px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`;
const WillYouLearnH1 = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 100px 0 0 78px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 50px 0 0 20px;
  }
`;
const WillYouContainerStyled = styled.div`
  display: flex;
  padding: 36px 0 0 80px;
  gap: 31px;
  @media (max-width: 470px) {
    padding: 36px 0 20px 20px;
    gap: 19px;
  }
`;
const WillYouImg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`;
const WillYouH1 = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  @media (max-width: 470px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.4px;
  }
`;
const WillYouText = styled.p`
  width: 673px;
  height: 60px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  @media (max-width: 470px) {
    width: 280px;
    height: 76px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`;
const StrelkaSpan = styled.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 117px;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0px 0 12px 51px;
    height: 47px;
  }
`;
const DivContainerFooter = styled("div")`
  background: #262626;
  margin: 50px 0 0 0;
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
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const DIVFOOTERImg = styled("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
const ImgFooter = styled.img`
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 130px;
  }
`;
