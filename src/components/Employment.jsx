import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import icons from "../assets/img/Group 80.svg";
import feMedal from "../assets/img/feMedal0.svg";
import vector from "../assets/img/Vector (4).svg";
import VideoPlayer from "./VideoPlayer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const Employment = () => {
  const language = useSelector((state) => state.language.language);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <StudentsContainerH3 ref={ref}>
        <CountUpStyled start={0} end={inView ? value : 0} duration={2} />
        <SuffixStyled>{suffix}</SuffixStyled>
      </StudentsContainerH3>
    );
  };

  return (
    <Container>
      <HeaderStyled>
        <HeaderStyledH1>
          {language === "KG"
            ? '"Биз өткөндү өзгөртө албайбыз, бирок келечекти түзө алабыз"'
            : " “Мы не можем изменить прошлое, но мы можем создать будущее”"}
        </HeaderStyledH1>
        <HeaderStyledP>
          {language === "KG"
            ? "Биздин максат студенттерге программалоону үйрөнүүгө жардам берүү. Биздин курстар бардыгы үчүн ылайыктуу - башталгычтардан баштап алдыңкы программисттерге чейин"
            : "Наша цель - помочь студентам научиться программированию. Наши курсы подходят для всех - от начинающих до продвинутых программистов"}
        </HeaderStyledP>
      </HeaderStyled>

      <EmploymentContainer>
        <article>
          <JuniorStyled ref={sectionRef} inview={inView}>
            <FigureStyled>
              <img src={icons} alt="C нуля до Junior" />
            </FigureStyled>
            <div>
              <JuniorStyledh2>
                {language === "KG" ? "Нөлдөн Junior чейин" : "C нуля до Junior"}
              </JuniorStyledh2>
              <JuniorStyledP>
                {language === "KG"
                  ? "Үйрөнүңүз жана Junior иштеп чыгуучу болуңуз!"
                  : " Обучись и стань Junior разработчиком!"}
              </JuniorStyledP>
            </div>
          </JuniorStyled>
          <StrelkaSpan ref={sectionRef} inview={inView} />

          <JuniorStyled ref={sectionRef} inview={inView}>
            <FigureStyled>
              <img src={feMedal} alt="Трудоустройство" />
            </FigureStyled>
            <div>
              <JuniorStyledh2>
                {language === "KG"
                  ? "Иш менен камсыз кылуу"
                  : "Трудоустройство"}
              </JuniorStyledh2>
              <JuniorStyledP>
                {language === "KG"
                  ? "Кепилденген практика!"
                  : "Гарантированная стажировка!"}
              </JuniorStyledP>
            </div>
          </JuniorStyled>
          <StrelkaSpan ref={sectionRef} inview={inView} />

          <JuniorStyled ref={sectionRef} inview={inView}>
            <FigureStyled>
              <img src={vector} alt="Портфолио" />
            </FigureStyled>
            <div>
              <JuniorStyledh2>
                {language === "KG" ? "Портфолио" : "Портфолио"}
              </JuniorStyledh2>
              <JuniorStyledP>
                {language === "KG"
                  ? "Сиздин портфолио үчүн 5 сапаттуу долбоорлор"
                  : " 5 качественных проектов к вам на портфолио"}
              </JuniorStyledP>
            </div>
          </JuniorStyled>
        </article>
        <AsideStyled>
          <StudentsContainer>
            <AnimatedCounter
              value={100}
              suffix={`${language === "KG" ? "+ Студенттер" : "+ Студентов"}`}
            />
            <StrelkaStudents />
            <AnimatedCounter
              value={70}
              suffix={`${language === "KG" ? "+ Бүтүрүүчүлөр" : "+ Выпускников"}`}
            />
          </StudentsContainer>
          <figure>
            <VideoPlayer />
          </figure>
        </AsideStyled>
      </EmploymentContainer>
    </Container>
  );
};

export default Employment;

const Container = styled.section`
  background: #f8f4f1;
  padding: 0 0 100px 0;
`;

const HeaderStyled = styled.header`
  display: flex;
  gap: 153px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 139px 0 52px 0;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0 0 0;
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 86px 0 0 0;
  }
`;

const HeaderStyledH1 = styled.h1`
  font-family: Montserrat Alternates;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  width: 544px;
  height: 132px;
  @media (max-width: 1024px) {
    width: 358px;
    height: 0px;
    font-family: Montserrat Alternates;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
  }
  @media (max-width: 470px) {
    width: 358px;
    height: 0px;
    font-family: Montserrat Alternates;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
  }
`;

const HeaderStyledP = styled.p`
  width: 546px;
  height: 66px;
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 500;
  line-height: 22.23px;
  text-align: left;
  @media (max-width: 1024px) {
    width: 383px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
  @media (max-width: 470px) {
    width: 383px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
  @media (max-width: 376px) {
    width: 343px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
`;

const EmploymentContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 70px;
  padding: 143px 0 0 0;
  position: relative;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 80px 0 0 0;
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 143px 0 0 0;
  }
`;

const JuniorStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;
  opacity: ${(props) => (props.inview ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(20px)"};
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-in-out;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 0 0 0 100px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0 0 0 14px;
  }
`;

const FigureStyled = styled.figure`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  background: linear-gradient(145deg, #e2e2e2, #ffffff);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin: 0 0 20px 0;
  &:hover {
    transform: scale(1.1);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`;

const StrelkaSpan = styled.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 37px;
  align-items: center;
  opacity: ${(props) => (props.inview ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(10px)"};
  transition:
    opacity 3s ease,
    transform 3s ease;
  ${JuniorStyled}:hover & {
    border-color: #1e1e2f;
  }
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 48px;
    height: 47px;
  }
`;

const JuniorStyledh2 = styled.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  color: #1e1e2f;
  text-align: left;
  padding: 0 0 10px 0;
  transition: color 0.3s ease;

  ${JuniorStyled}:hover & {
    color: #ff5733;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18.7px;
    font-weight: 600;
    line-height: 21.88px;
    text-align: left;
    padding: 0 0 5px 0;
  }
`;

const JuniorStyledP = styled.p`
  width: 200px;
  height: 40px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  color: #52515d;
  transition: color 0.3s ease;

  ${JuniorStyled}:hover & {
    color: #333;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 15.89px;
    font-weight: 400;
    line-height: 18.6px;
    text-align: left;
  }
`;
const AsideStyled = styled.aside`
  position: relative;
`;

const StudentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5e59ee;
  width: 647px;
  height: 137px;
  position: absolute;
  top: -75px;
  left: 120px;
  z-index: 900;
  overflow: hidden;
  @media (max-width: 1024px) {
    left: calc(50% - 250px); /* Centered with a slight offset */
    top: -20px;
    width: 500.18px;
    height: 70.44px;
  }

  @media (max-width: 470px) {
    left: calc(50% - 165px); /* Centered with a slight offset */
    top: -20px;
    width: 330.18px;
    height: 70.44px;
  }

  @media (max-width: 376px) {
    left: calc(50% - 165px); /* Centered with a slight offset */
    top: -20px;
    width: 330.18px;
    height: 70.44px;
  }
`;

const StrelkaStudents = styled.span`
  display: flex;
  width: 1px;
  background: #f8f4f1;
  margin: 7px 20px 0 20px;
  height: 62px;
  @media (max-width: 470px) {
    height: 40px;
  }
`;

const StudentsContainerH3 = styled.span`
  font-family: "Abril Fatface", serif;
  font-size: 41px;
  font-weight: 400;
  line-height: 76.05px;
  text-align: left;
  color: #f8f4f1;
  display: flex;
  align-items: center;
`;
const SuffixStyled = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 500;
  line-height: 23.4px;
  margin-left: 5px;
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;
const CountUpStyled = styled(CountUp)`
  font-family: "Abril Fatface", serif;
  font-size: 65px;
  font-weight: 400;
  line-height: 76.05px;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 20.05px;
  }
  @media (max-width: 470px) {
    font-size: 18px;
    line-height: 20.05px;
  }
`;
