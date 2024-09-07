import React, { useEffect } from "react";
import styled from "styled-components";
import arrow from "../assets/img/Arrow 2.svg";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../redux/CousesSlice";

import uxuiIcon from "../assets/img/image 45.svg";
import frontendIcon from "../assets/img/image 33.svg";
import pythonIcon from "../assets/img/image 44.svg";
import javaIcon from "../assets/img/java-svgrepo-com 2.svg";

const iconMap = {
  "Front-End": frontendIcon,
  "UX/UI Designer": uxuiIcon,
  Python: pythonIcon,
  Java: javaIcon,
};

const Courses = () => {
  const { gettingAllCourses } = useSelector((state) => state.courses);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (language) {
      dispatch(
        fetchAllCourses({
          language: language === "KG" ? "KYRGYZSTAN" : "RUSSIAN",
        })
      );
    }
  }, [dispatch, language]);

  const handleNavigation = (element) => {
    switch (element.title) {
      case "Front-End":
        navigate("/frontend");
        break;
      case "UX/UI Designer":
        navigate("/ux-ui");
        break;
      case "Python":
        navigate("/python");
        break;
      case "Java":
        navigate("/java");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  return (
    <CoursesStyled id="Courses">
      <CoursesH1>{language === "KG" ? "Курстар" : "Курсы"}</CoursesH1>
      <ContainerSection>
        <ULStyled>
          <LISTSTYLED>
            {language === "KG" ? "Бардык багытар" : "Все направления"}
          </LISTSTYLED>
          <LISTSTYLED>Front-End developer</LISTSTYLED>
          <LISTSTYLED>Python developer</LISTSTYLED>
          <LISTSTYLED>Java developer</LISTSTYLED>
          <LISTSTYLED>UX/UI Design</LISTSTYLED>
        </ULStyled>
        <div>
          <SectionContainer1>
            {gettingAllCourses?.length > 0 ? (
              gettingAllCourses.map((element) => (
                <Container1Styled
                  ref={ref1}
                  inView={inView1}
                  key={element.title}
                >
                  <Container1StyledDiv>
                    <Container1StyledH3>Курс</Container1StyledH3>
                    <img
                      src={iconMap[element.title] || uxuiIcon}
                      alt={element.title}
                    />
                  </Container1StyledDiv>
                  <div>
                    <div>
                      <Container1StyledH1>{element.title}</Container1StyledH1>
                      <Container1StyledP>
                        {element.description}
                      </Container1StyledP>
                    </div>
                  </div>
                  <Container1StyledDivButton>
                    <Container1StyledButton
                      onClick={() => handleNavigation(element)}
                    >
                      {element.language === "KYRGYZSTAN"
                        ? "Кененирээк"
                        : "ПОДРОБНЕЕ"}
                      <img src={arrow} alt="" />
                    </Container1StyledButton>
                  </Container1StyledDivButton>
                </Container1Styled>
              ))
            ) : (
              <NoCoursesMessage>Нет доступных курсов</NoCoursesMessage>
            )}
          </SectionContainer1>
        </div>
      </ContainerSection>
    </CoursesStyled>
  );
};

export default Courses;
const NoCoursesMessage = styled.p`
  font-size: 18px;
  color: #ff2f00;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 250px;
  margin: 0 auto;
  @media (max-width: 470px) {
    display: none;
  }
`;
const CoursesStyled = styled.section`
  background: #f8f4f1;
  padding: 0px 0 50px 0;
  @media (max-width: 1024px) {
    padding: 0px 0 20px 0;
  }
  @media (max-width: 470px) {
    padding: 0px 0 20px 0;
  }
`;
const CoursesH1 = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  color: #1e1e2f;
  padding: 0 0 67px 0;
  @media (max-width: 1024px) {
    padding: 0 0 20px 0;
  }
`;
const ULStyled = styled.ul`
  @media (max-width: 470px) {
    margin: 0 0 0 -167px;
  }
`;
const LISTSTYLED = styled.li`
  list-style: none;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.06px;
  text-align: left;
  padding: 0 0 22px 0;
  color: #1e1e2f;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 300px;
    border-radius: 15px;
    padding: 10px 5px;
    margin: 10px 0 19px 0;
    background: #ffffff;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 470px) {
    width: 199px;
    border-radius: 15px;
    padding: 10px 5px;
    margin: 10px 0 19px 0;
    background: #ffffff;
    text-align: center;
    cursor: pointer;
  }
`;
const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  gap: 76px;
  @media (max-width: 1024px) {
    gap: 10px;
    flex-wrap: wrap;
  }
  @media (max-width: 470px) {
    flex-wrap: wrap;
    gap: 0;
  }
`;
const SectionContainer1 = styled.section`
  display: flex;
  /* justify-content: center; */
  width: 1000px;
  flex-wrap: wrap;
  gap: 99px;
  padding: 0 0 51px 0;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding: 0 0 42px 0;
    gap: 42px;
  }
  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0 42px 0;
    gap: 42px;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0 42px 0;
    gap: 42px;
  }
`;
const Container1Styled = styled.div`
  width: 444px;
  height: 279px;
  background: #ffffff;
  border-radius: 10px;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(20px)"};
  transition:
    opacity 1s ease,
    transform 1s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    width: 600px;
    height: 300.5px;
    &:hover {
      transform: scale(1);
    }
  }
  @media (max-width: 470px) {
    width: 370px;
    height: 232.5px;
    &:hover {
      transform: scale(1);
    }
  }
`;

const Container1StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 15px 0 23px;
`;
const Container1StyledH3 = styled.h3`
  width: 74px;
  height: 33px;
  padding: 7px 17px 7px 17px;
  border-radius: 5px;
  background: #f3f3f6;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.72px;
  text-align: left;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 61.67px;
    height: 27.5px;
    padding: 5.83px 14.17px 5.83px 14.17px;
    border-radius: 4.17px;
    font-size: 13.33px;
    font-weight: 400;
    line-height: 15.6px;
  }
  @media (max-width: 470px) {
    width: 61.67px;
    height: 27.5px;
    padding: 5.83px 14.17px 5.83px 14.17px;
    border-radius: 4.17px;
    font-size: 13.33px;
    font-weight: 400;
    line-height: 15.6px;
  }
`;
const Container1StyledH1 = styled.h1`
  font-family: Montserrat;
  font-size: 35px;
  font-weight: 600;
  line-height: 40.95px;
  text-align: left;
  color: #1e1e2f;
  padding: 0px 0 15px 23px;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #ff6347;
    transform: translateY(-5px);
  }
  @media (max-width: 1024px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 29.25px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 29.25px;
  }
`;

const Container1StyledP = styled.p`
  font-family: Jost;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.23px;
  text-align: left;
  color: #1e1e2f;
  width: 323px;
  height: 66px;
  padding: 0px 0 15px 23px;
  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
  @media (max-width: 470px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`;
const Container1StyledDivButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 25px 0 0;
`;
const Container1StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-family: Montserrat;
  font-size: 12.17px;
  font-weight: 600;
  line-height: 14.24px;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ff6347;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10.14px;
    line-height: 11.87px;
  }
`;
